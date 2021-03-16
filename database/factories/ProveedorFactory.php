<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Proveedor;
use Faker\Generator as Faker;

$factory->define(Proveedor::class, function (Faker $faker) {
    return [
        'nombre' => $faker->sentence(13),
        'direccion' => $faker->sentence(18),
        'telefono' => Str::random(8)
    ];
});
