<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class DetallePlanilla extends Model
{
    protected $table = 'detalle_planilla';

    public function planilla()
    {
        return $this->belongsTo(Planilla::class);
    }

    public function material()
    {
        return $this->belongsTo(Material::class);
    }

  
}
