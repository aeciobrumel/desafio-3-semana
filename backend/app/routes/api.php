<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
//->middleware('auth:sanctum');
Route::post('login',[AuthController::class, 'login']);
Route::post('logout',[AuthController::class, 'logout']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('users',[UserController::class, 'store'])->middleware('role:admin,docente');
    Route::get('users/{id}',[UserController::class, 'show'])->middleware('role:admin,docente');
    Route::put('users/{id}',[UserController::class, 'update'])->middleware('role:admin,docente');
     Route::delete('users/{id}',[UserController::class, 'destroy'])->middleware('role:admin');  
     Route::get('users',[UserController::class, 'index']);
    });

