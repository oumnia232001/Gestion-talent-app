<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdateCandidatRequest extends FormRequest
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
            'name' => 'required|max:255',
            'email' => 'required',
            'password' => 'required|max:255', 
            'phone' => 'required|max:10',
            'date_of_birth' => 'required|date',
            'address' => 'required|max:255',
            'gender' => ['required', Rule::in(['m', 'f'])],
            'last_position_held' => 'required|max:45', 
            'faculty_name' => 'required|max:45',
            'profile_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Ajoutez la validation pour profile_image
        ];
    }
}
