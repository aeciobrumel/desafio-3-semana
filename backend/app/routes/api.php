<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;


Route::get('/users/{id}', function (string $id) {
    $user = User::findOrFail($id);
    return new UserResource($user);
});

Route::get('/users', function () {
    return response()->json(User::all());
});


//->middleware('auth:sanctum');
Route::post('login',[AuthController::class, 'login']);
Route::post('logout',[AuthController::class, 'logout']);


/*
Route::get('users','UserController');
Route::post('users','UserController');
Route::get('users/{id}','UserController');
Route::put('users/{id}','UserController');
Route::delete('users/{id}','UserController');
*/