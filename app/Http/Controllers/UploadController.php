<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\TestExcelArray;
use App\Imports\TestImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UploadController extends Controller
{
    /**
     * 이미지 다운로드 테스트
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $filepath = public_path('upload/').'1620631217.jpg';
        return response()->download($filepath);
    }

    /**
     * 업로드 파일 서버저장
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tempFileName = 'test_'.rand(1000000, 9999999).'.xlsx'; // 임시파일명
        $request->file->move(public_path('download'), $tempFileName); // 업로드된 파일 저장
        $rows = Excel::toArray(new TestImport, public_path('download/').$tempFileName); // 3-D array 변환
    
        $tmpArr = array();
        $tmpExistNum = 0;
        $tmpInsertNum = 0;
        for($i = 1; $i < count($rows[0]); $i++){
            $tempInsertData = DB::select(DB::raw("exec DeclarePROC2 :Param1, :Param2"),[
                ':Param1' => (int)$rows[0][$i][0],
                ':Param2' => $rows[0][$i][1],
            ]);

            if($tempInsertData){
                $tmpArr['EXIST'][$tmpExistNum]['id'] = $rows[0][$i][0];
                $tmpArr['EXIST'][$tmpExistNum]['name'] = $rows[0][$i][1];
                $tmpArr['EXIST'][$tmpExistNum]['quantity'] = $rows[0][$i][2];
                $tmpExistNum++;
            }else{
                // isnert procedure의 경우는 update
                DB::update("exec InsertPROC :Param1, :Param2, :Param3",[
                    ':Param1' => (int)$rows[0][$i][0],
                    ':Param2' => $rows[0][$i][1],
                    ':Param3' => (int)$rows[0][$i][2],
                ]);
                $tmpArr['INSERT'][$tmpInsertNum]['id'] = $rows[0][$i][0];
                $tmpArr['INSERT'][$tmpInsertNum]['name'] = $rows[0][$i][1];
                $tmpArr['INSERT'][$tmpInsertNum]['quantity'] = $rows[0][$i][2];
                $tmpInsertNum++;
            }
        }

        $tmpArr['EXIST_COUNT'] = $tmpExistNum;
        $tmpArr['INSERT_COUNT'] = $tmpInsertNum;

        $this->removeExcel($tempFileName);
        return $tmpArr;
    }

    /**
     * 조회값 엑셀다운로드
     *
     * @param  \App\Models\upload  $upload
     * @return \Illuminate\Http\Response
     */
    public function show($upload)
    {
        $select = DB::select(DB::raw("exec DeclarePROC :Param1"),[
            ':Param1' => $upload
        ]);
        array_unshift($select , array('ID', 'NAME', 'QUANTITY'));

        $export = new TestExcelArray($select);

        return Excel::download($export, date('YmdHis').'_test.xlsx');;
    }

    public function removeExcel($fileName)
    {
        if(\File::exists(public_path('download/').$fileName)){
            \File::delete(public_path('download/').$fileName);
            return true;
        }else{
            return false;
        }
    }
}
