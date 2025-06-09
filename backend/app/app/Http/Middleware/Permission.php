<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Permission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
         {
        $user = $request->user();

        if (!in_array($user->permission, $roles)) {
           return redirect()->with('error', 'Acesso negado.');
        }
        return $next($request);          

    }
    
}
// app/Http/Middleware/RoleMiddleware.php

   

