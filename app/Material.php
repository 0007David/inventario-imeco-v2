<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    protected $table = 'material';

    protected $primaryKey = 'codigo';

    protected $fillable = [
        'nro_material',
        'nombre',
        'precio',
        'descripcion',
        'es_padre',
        'id_unidad',
        'id_categoria'
    ];

    protected $hidden = [
        'remember_token',
    ];

    public function categoria() {

    	return $this->belongsTo('App\Categoria', 'id_categoria');
    }

    public function unidadmedida() {

    	return $this->belongsTo('App\UnidadMedida', 'id_unidad');
    }

}