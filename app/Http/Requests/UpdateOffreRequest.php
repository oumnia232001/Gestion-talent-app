<?php

namespace App\Http\Requests;
use App\Enums\ContratEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdateOffreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'experience_years' => 'required|integer',
            'knowledge'  => 'required|max:350',
            'contrat'  => ['required', Rule::enum(ContratEnum::class)],
            'experience_required'  => 'required|max:250', 
            'formation'  => 'required|max:45',
            'languages'  => 'required|max:150',
            'missions'  => 'required|max:350',
            'number_to_recruit'  => 'required|integer',
            'salary'  => 'required|integer',
            'Status'  => 'required|max:100',
            'recruiter_id' => 'required'
        ];
    }
}
