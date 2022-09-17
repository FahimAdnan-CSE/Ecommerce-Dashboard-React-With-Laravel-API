<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

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

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('addproduct',[ProductController::class,'addProduct']); 
Route::post('list',[ProductController::class,'list']);
Route::post('delete',[ProductController::class,'delete']);
Route::get('getproduct/{id}',[ProductController::class,'getProduct']);
Route::post('searchproduct',[ProductController::class,'searchProduct']);
Route::post('updateproduct',[ProductController::class,'updateProduct']);