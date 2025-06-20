<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email',100)->unique();
            $table->string('name',100);
            $table->string('password',200);
            $table->string('cpf',14)->unique();
            $table->string('permission');
            $table->boolean('first_login')->default(true);
            $table->boolean('update_password')->default(false);
            $table->string('photo')->nullable(); 
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
