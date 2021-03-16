<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Etapa extends Model
{
    protected $table = 'etapa';

    protected $fillable = [
        'nombre',
        'progreso',
        'fecha_inicio',
        'fecha_fin',
        'id_etapa',
        'id_proyecto'
    ];

    protected $hidden = [
        'remember_token',
    ];

    /**
     * Get the etapa that owns the comment.
     */
    public function proyecto()
    {
        return $this->belongsTo('App\Proyecto', 'id_proyecto');
    }

    public function subEtapas()
    {
        return $this->hasMany('App\Etapa', 'id_etapa');
    }
}
