<?php

use App\Rol;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rol::create([
            'nombre' => 'Administrador'
        ]);
        Rol::create([
            'nombre' => 'Encargado de Proyecto'
        ]);
        Rol::create([
            'nombre' => 'Secretaria'
        ]);

        User::create([
            'name' => 'admin',
            'email'=>'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('12345678'),
            'id_rol' => 1,
            'remember_token' => Str::random(10),
        ]);
    }
}
