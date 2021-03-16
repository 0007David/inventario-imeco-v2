<?php

use App\Almacen;
use App\Categoria;
use App\Material;
use App\UnidadMedida;
use Illuminate\Database\Seeder;

class MaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = factory(Categoria::class,5)->create();
        $unidades = factory(UnidadMedida::class,5)->create();

        $categories->each(function($category) {
            $products = factory(Material::class,12)->make();
            $category->materiales()->saveMany($products);
        });
    }
}
