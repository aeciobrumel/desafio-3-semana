<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Requests\RequestStoreUpdateUser;

class UserController extends Controller
{
        public function index(){
            
            $users= User::all();
            return UserResource::collection($users);
        }
        public function store (RequestStoreUpdateUser $request){
            $validated = $request->validated();
            $user = User::create($validated);
            return response()->json(new UserResource($user), 201);
        }
        public function show($id){
            $user = User::find($id);
            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }
            return new UserResource($user);
        }
        public function update(RequestStoreUpdateUser $request,$id){
            $validated = $request->validated();
            $user = User::find($id);
            if (!$user){
                return response()->json(['error' => 'User not found'], 404);
            }
            $user->update($validated);
            return response()->json(new UserResource($user), 200);
        }
        public function destroy($id){
            $user = User::find($id);
            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }
            $user->delete();
            return response()->json(['message' => 'User deleted successfully'], 200);
        }
    }




