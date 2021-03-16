<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetalleNotaSalida extends Model
{
    protected $table = 'detalle_notasalida';

    protected $fillable = [
        'id_stock',
        'id_notasalida',
        'cantidad',
        'created_at',
        'updated_at',
    ];

    protected $hidden = [
        'remember_token',
    ];
}


