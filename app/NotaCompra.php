<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NotaCompra extends Model
{
    protected $table = 'nota_compra';


    protected $fillable = [
        'id',
        'fecha',
        'montototal',
        'id_proveedor',
        'id_user',
        'created_at',
        'updated_at',
    ];

    protected $hidden = [
        'remember_token',
    ];
}
