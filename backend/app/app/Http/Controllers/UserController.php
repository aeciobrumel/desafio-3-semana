<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RequestStoreUpdateUser;
use Illuminate\Http\Request;

class UserController extends Controller
{
        public function index(){
            $users= User::all();
            return UserResource::collection($users);
        }
        public function store (RequestStoreUpdateUser $request){
            $validated = $request->validated();

            if (request()->hasFile("photo")) {
                $path = request()->file("photo")->store("users", 'public');
                $url = asset("storage/" . $path);
                $validated['photo'] = $url;
            }


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
            $user = User::find($id);
            if (!$user){
                return response()->json(['error' => 'User not found'], 404);
            }
            $validated = $request->validated();
            if($request->hasFile('photo')){
                $path = $request->file('photo')->store('users', 'public');
                $url = asset('storage/' . $path);
                $validated['photo'] = $url;
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

        public function impersonate(Request $request){
            $impersonator = Auth::user();
            $request->validate([
                'user_id' => 'required|exists:users,id',
            ]);

            $targetUser = User::findOrFail($request->user_id);

            if($impersonator->permission ==='admin' ){
        // Admin pode impersonar qualquer um
            }elseif($impersonator->permission ==="docente"){
                if($targetUser->permission !=="aluno"){
                    return response()->json(['error'=> 'so pode impersionar alunos'],401);
                }

            }
            else{
                return response()->json(['error'=> 'aacesso negado'],403);
            }
            $token = $targetUser->createToken('impersonated_token')->plainTextToken;
        
            return response()->json([
                'access_token'=>$token,
                'token_type'=>'Bearer',
                'user'=>new UserResource($targetUser)
            ]);
    }




}