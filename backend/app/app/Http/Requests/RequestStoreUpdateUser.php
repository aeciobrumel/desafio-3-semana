<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;


class RequestStoreUpdateUser extends FormRequest
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
    public function rules(): array
    {
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'cpf' => ['required', 'string', 'max:14'],
            'permission' => ['required', 'string'],
        ];
        if ($this->isMethod('post')) {
            $rules['password'] = ['required', 'string', 'min:6' ] ;
        } else {
            $rules['password'] = ['nullable', 'string', 'min:6' ];
        }
        return $rules;
    }

    protected function prepareForValidation()
    {
        if ($this->filled('password')) {
            $this->merge([
                'password' => Hash::make($this->input('password')),
            ]);
        }
    }
}
