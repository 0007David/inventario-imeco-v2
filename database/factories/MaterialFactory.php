<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Material;
use Faker\Generator as Faker;

$factory->define(Material::class, function (Faker $faker) {
    return [
        'nro_material' => Str::random(8),
        'nombre' => $faker->name,
        'precio' => $faker->numberBetween(20, 120),
        'descripcion' => $faker->sentence(13),
        'es_padre' => false,
        'id_unidad' => $faker->numberBetween(1,5),
        'id_categoria' => $faker->numberBetween(1,5),
    ];
});
