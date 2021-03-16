<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Stock;
use Faker\Generator as Faker;

$factory->define(Stock::class, function (Faker $faker) {
    return [
        'fecha_entrada' => now(),
        'fecha_vencimiento' => now(),
        'cantidad' => $faker->numberBetween(10, 25),
        'cantidad_anterior' => 0,
        'precio' => $faker->numberBetween(10, 150),
        'disponible' => true,
        'cod_material' => $faker->numberBetween(1,5),
        'id_almacen' => $faker->numberBetween(1,5),
        'created_at' => now(),
    ];
});
