<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
class Recruiter extends Authenticatable
{
    use HasFactory,HasApiTokens, SoftDeletes,Notifiable;
    protected $appends = ['role'];

    public function getRoleAttribute()
    {
       return'recruiter';  
    }
}