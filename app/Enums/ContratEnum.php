<?php

namespace App\Enums;


enum ContratEnum: string
{
    case INDEFINITE_EMPLOYMENT_CONTRACT = 'CDI';
    case SPECIFIC_EMPLOYMENT_CONTRACT = 'CDD';
    case INTERNSHIP_OBSERVATION = 'Internship Observation';
    case PRE_EMPLOYMENT_TRAINING = 'Pre-employment Training';
    case END_OF_STUDY_INTERNSHIP_PRESENTATION = 'End of Study Internship Presentation';
}
