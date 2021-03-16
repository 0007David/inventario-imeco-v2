<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    protected $table = 'proyecto';

    protected $fillable = [
        'nombre',
        'nombre_corto',
        'fecha_inicio',
        'fecha_fin',
        'id_user'
    ];

    protected $hidden = [
        'remember_token',
    ];

    /**
     * Get the usuario.
     */
    public function usuario()
    {
        return $this->belongsTo('App\User', 'id_user');
    }

    /**
     * Get the etapas for the proyect.
     */
    public function etapas()
    {
        return $this->hasMany('App\Etapa', 'id_proyecto');
    }
}
