<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Resources\UserResource;



Route::get('/users/{id}', function (string $id) {
    $user = User::findOrFail($id);
    return new UserResource($user);
});

Route::get('/users', function () {
    return response()->json(User::all());
});


//->middleware('auth:sanctum');
