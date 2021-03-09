<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Material;

class Planilla extends Model
{
    protected $table = 'planilla';

    protected $hidden = [
        'remember_token',
    ];

}
