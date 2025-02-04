<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'id',
        'phone',
        'address',
        'date_of_birth',
        'last_login_date',
        'gender',
        'last_position_held',
        'faculty_name',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $n = [
        'password',
        'remember_token',
    ];
    protected $appends = ['role'];

    public function getRoleAttribute()
    {
       return'candidat';
    }

    
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'date_of_birth' => 'date:Y-m-d'
    ];
}
