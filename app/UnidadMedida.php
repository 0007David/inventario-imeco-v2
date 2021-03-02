<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UnidadMedida extends Model
{
    protected $table = 'unidad_medida';

    protected $fillable = [
        'nombre',
    ];

    protected $hidden = [
        'remember_token',
    ];
}
