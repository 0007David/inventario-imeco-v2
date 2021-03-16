<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\NotaCompra;
use Faker\Generator as Faker;

$factory->define(NotaCompra::class, function (Faker $faker) {
    return [
        'fecha' => now(),
        'montototal' => $faker->numberBetween(100,1200),
        'id_proveedor' => 1,
        'id_user' => 1,
    ];
});
