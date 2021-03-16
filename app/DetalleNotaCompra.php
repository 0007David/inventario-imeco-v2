<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetalleNotaCompra extends Model
{
    protected $table = 'detalle_compra';

    protected $fillable = [
        'id_notacompra',
        'cod_material',
        'cantidad',
        'precio',
        'stocked',
        'created_at',
        'updated_at',
    ];

    protected $hidden = [
        'remember_token',
    ];
}
