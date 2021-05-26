<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Axios extends Model
{
    protected = $axiosArray;

    $axiosArray['data'] = 'TEST DATA';
    $axiosArray['data'][0] = 'TEST DATA 0';
    $axiosArray['data'][1] = 'TEST DATA 1';
    $axiosArray['data'][2] = 'TEST DATA 2';
    $axiosArray['data'][3] = 'TEST DATA 3';
    $axiosArray['data'][4] = 'TEST DATA 4';
    
    use HasFactory;
}
