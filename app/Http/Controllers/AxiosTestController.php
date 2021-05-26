<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AxiosTestController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $test[0]['id'] = '1111';
        $test[0]['gender'] = 'Male';
        $test[0]['name'] = 'KHS';
        $test[1]['id'] = '2222';
        $test[1]['gender'] = 'Female';
        $test[1]['name'] = 'KNY';

        return json_encode($test);
    }
}
