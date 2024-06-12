<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $user = $this->route('user');

        return [
            'name' => 'required|string',
            'gender' => 'required|boolean',
            'birthday' => 'required|date_format:Y-m-d',
            'email' => "required|email|unique:users,email,{$user->id}",
            'password' => 'nullable|string|confirmed|min:1',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Необходимо заполнить имя.',
            'gender.required' => 'Необходимо указать пол.',
            'birthday.required' => 'Необходимо указать дату рождения.',
            'birthday.date_format' => 'Неверно указана дата рождения.',
            'email.required' => 'Необходимо заполнить e-mail.',
            'email.email' => 'E-mail введен не корректно.',
            'email.unique' => 'E-mail не уникален.',
            'password.confirmed' => 'Пароли не совпадают.',
            'password.min' => 'Пароль должен быть длиннее 8 символов.',
        ];
    }
}
