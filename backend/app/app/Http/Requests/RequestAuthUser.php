<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestAuthUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    protected function prepareForValidation():void{
        $this->merge([
            'cpf'=> preg_replace('/\D/', '', $this->cpf),
        ]);
    }


    public function rules(): array
    {
        return [
            'cpf' => 'required|string|digits:11',
            'password' => 'required',   
        ];
    }
}
