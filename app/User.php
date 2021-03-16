<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the rol.
     */
    public function rol()
    {
        return $this->belongsTo('App\Rol', 'id_rol');
    }

    /**
     * Get the Proyecto.
     */
    public function proyecto()
    {
        return $this->hasOne('App\Proyecto', 'id_user');
    }

    public static function findByEmail($email)
    {
        return static::where('email',compact('email'))->first();
    }
}
