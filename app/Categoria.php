<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Material;

class Categoria extends Model
{
    protected $table = 'categoria';

    protected $fillable = [
        'nombre',
    ];

    protected $hidden = [
        'remember_token',
    ];

    public function materiales(){

    	return $this->hasMany('App\Material', 'id_categoria', 'id');
    }
}
