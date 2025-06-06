<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Enums\PermissionLevel;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
     DB::table('users')->insert([
                [
                    'name' => 'teste',
                    'email' => 'teste@exemplo.com',
                    'password' => Hash::make('123456'),
                    'permission' => 'admin',
                    'cpf' => '66666666666',
                    'first_login' => false,
                ],
                [
                    'name' => 'Administrador',
                    'email' => 'administrador@exemplo.com',
                    'password' => Hash::make('123456'),
                    'permission' => 'admin',
                    'cpf' => '11111111111',
                    'first_login' => false,

                ],
                [
                    'name' => 'Docente',
                    'email' => 'docente@exemplo.com',
                    'password' => Hash::make('123456'),
                    'permission' => 'docente',
                    'cpf' => '22222222222',
                    'first_login' => true,

                ],
                [
                    'name' => 'Aluno',
                    'email' => 'aluno@exemplo.com',
                    'password' => Hash::make('123456'),
                    'permission' => 'aluno',
                    'cpf' => '33333333333',
                    'first_login' => true,
                ],
                [
                    'name' => 'teste2',
                    'email' => 'teste2@exemplo.com',
                    'password' => Hash::make('123456'),
                    'permission' => 'admin',
                    'cpf' => '44444444444',
                    'first_login' => true,
                ],
                [
                    'name' => 'teste3',
                    'email' => 'teste3@exemplo.com',
                    'password' => Hash::make('123456'),
                    'permission' => 'docente',
                    'cpf' => '55555555555',
                    'first_login' => false,
                ],
            ]);
    }
}
