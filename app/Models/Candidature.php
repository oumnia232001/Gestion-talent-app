<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Candidature extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'interview_result',
        'user_id',
        'offre_id',
        'recruiter_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'deleted_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user associated with the candidature.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the offre associated with the candidature.
     */
    public function offre()
    {
        return $this->belongsTo(Offre::class);
    }

    /**
     * Get the recruiter associated with the candidature.
     */
    public function recruiter()
    {
        return $this->belongsTo(User::class, 'recruiter_id');
    }
}
