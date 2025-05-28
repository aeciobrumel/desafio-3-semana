<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    public function login(Request $request)
    {
       $validated = $request->validate([
            'cpf' => ['required','string'],
            'password' => ['required','string'],
        ]);
        // Attempt to log the user in
        // If the credentials are correct, the user will be authenticated
        if (Auth::attempt($validated)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;            
            // If the user is logging in for the first time, set first_login to false
            return response()->json(
                [
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'user' => new UserResource($user),
                ],
                200
            );
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout(); 
        return response()->json(['message' => 'logout com sucesso'],200);
    }
}
