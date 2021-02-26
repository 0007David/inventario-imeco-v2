<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Almacen extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'almacen';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'ubicacion'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token',
    ];

}
