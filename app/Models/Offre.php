<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offre extends Model
{
    use HasFactory;
    protected $fillable = [
        
        'experience_years',
        'knowledge',
        'contrat', 
        'experience_required', 
        'formation', 
        'languages', 
        'missions', 
        'number_to_recruit',
        'salary',
        'Status', 
        'recruiter_id',
    ];
}
