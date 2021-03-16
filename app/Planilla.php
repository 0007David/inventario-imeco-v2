<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Planilla extends Model
{
    protected $table = 'planilla';

    protected $primaryKey = 'codigo';

    protected $hidden = [
        'remember_token',
    ];

}
