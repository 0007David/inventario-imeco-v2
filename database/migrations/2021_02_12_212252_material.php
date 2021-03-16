<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Material extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('material', function (Blueprint $table) {

            $table->bigIncrements('codigo')->unique();
            $table->string('nro_material', 12)->unique();
            $table->string('nombre',250);
            $table->double('precio');
            $table->integer('cantidad_min')->default(0);
            $table->integer('cantidad_max')->default(0);
            $table->boolean('es_padre')->default(false);
            $table->string('descripcion',300)->nullable();
            $table->unsignedBigInteger('id_unidad');
            $table->unsignedBigInteger('id_categoria');
            $table->rememberToken();
            $table->timestamps();
            //relations with other tables
            $table->foreign('id_unidad')->references('id')->on('unidad_medida');
            $table->foreign('id_categoria')->references('id')->on('categoria');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
