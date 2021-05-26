<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $test[0]['name'] = 'KHS';
        $test[0]['gender'] = 'MALE';
        $test[0]['TEXT'] = 'TEXT 1';
        $test[1]['name'] = 'KNY';
        $test[1]['gender'] = 'FEMALE';
        $test[1]['TEXT'] = 'TEXT 2';
        $test[2]['name'] = 'BSA';
        $test[2]['gender'] = 'FEMALE';
        $test[2]['TEXT'] = 'TEXT 3';
        $test[3]['name'] = 'YSM';
        $test[3]['gender'] = 'FEMALE';
        $test[3]['TEXT'] = 'TEXT 4';

        return json_encode($test);
    }
}
