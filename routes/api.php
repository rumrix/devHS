<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AxiosTestController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\Photo2Controller;
use App\Http\Controllers\UploadController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/home', [HomeController::class, 'index']);

Route::get('/axios', AxiosTestController::class);

Route::resource('photos', PhotoController::class);

Route::resource('photos2', Photo2Controller::class)->only([
    'index', 'show', 'edit', 'store'
]);

Route::resource('photos2', Photo2Controller::class)->except([
    'create', 'update', 'destroy'
]);

Route::resource('file', UploadController::class)->only([
    'index', 'store', 'show'
]);

Route::resource('file', UploadController::class)->except([
    'edit', 'create', 'update', 'destroy'
]);