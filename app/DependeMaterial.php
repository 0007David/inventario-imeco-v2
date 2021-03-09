<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DependeMaterial extends Model
{
    protected $table = 'depende';

    // protected $primaryKey = 'codigo';

    protected $fillable = [
        'cod_materialpadre',
        'cod_materialhijo',
        'created_at',
        'updated_at',
    ];

    protected $hidden = [
        'remember_token',
    ];
}
