<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Almacen;
use Faker\Generator as Faker;

$factory->define(Almacen::class, function (Faker $faker) {
    return [
        'nombre' => $faker->name,
        'ubicacion' => $faker->sentence(12)
    ];
});
