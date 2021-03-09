<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NotaSalida extends Model
{
    protected $table = 'nota_salida';


    protected $fillable = [
        'nombre',
        'fecha',
        'id_user',
        'created_at',
        'updated_at',
    ];

    protected $hidden = [
        'remember_token',
    ];
}
