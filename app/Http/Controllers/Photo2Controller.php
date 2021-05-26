<?php

namespace App\Http\Controllers;

use App\Models\Photo2;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class Photo2Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $arrays['label'] = 'Clothes';
        $arrays['children'][0]['label'] = 'Men';
        $arrays['children'][0]['children'][0]['label'] = 'Belt';
        $arrays['children'][0]['children'][1]['label'] = 'Pants';
        $arrays['children'][1]['label'] = 'women';
        $arrays['children'][1]['children'][0]['label'] = 'Onepiece';
        $arrays['children'][1]['children'][1]['label'] = 'Skirt';

        return json_encode($arrays);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return 'CREATE 2';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tempInsertData = DB::select(DB::raw("exec DeclarePROC2 :Param1, :Param2"),[
            ':Param1' => (int)$request['id'],
            ':Param2' => $request['name'],
        ]);

        if($tempInsertData){
            return 'FALSE';
        }

        // isnert procedure의 경우는 update
        DB::update("exec InsertPROC :Param1, :Param2, :Param3",[
            ':Param1' => (int)$request['id'],
            ':Param2' => $request['name'],
            ':Param3' => (int)$request['quantity'],
        ]);

        return 'TRUE';
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Photo2  $photo2
     * @return \Illuminate\Http\Response
     */
    public function show($photo2)
    {
        $select = DB::select(DB::raw("exec DeclarePROC :Param1"),[
            ':Param1' => $photo2
        ]);

        return json_encode($select);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Photo2  $photo2
     * @return \Illuminate\Http\Response
     */
    public function edit($request)
    {
        //
        $tempSelectData = DB::select(DB::raw("exec DeclarePROC2 :Param1, :Param2"),[
            ':Param1' => (int)$request,
            ':Param2' => '',
        ]);

        return json_encode($tempSelectData);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Photo2  $photo2
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Photo2 $photo2)
    {
        //
        return 'UPDATE 2';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Photo2  $photo2
     * @return \Illuminate\Http\Response
     */
    public function destroy(Photo2 $photo2)
    {
        //
        return 'DESTROY 2';
    }
}
