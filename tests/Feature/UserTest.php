<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    public function test_users(): void
    {
        $this
            ->withSession(['_token' => 'qwerty'])
            ->post('/user', [
                '_token' => 'qwerty',
                'name' => 'name',
                'email' => 'test@mail.ru',
                'gender' => 'Мужской',
                'birthday' => '2004-05-06',
                'password' => 'test',
            ]);

        $this->assertDatabaseHas('users', [
            'email' => 'test@mail.ru',
        ]);

        $this->assertDatabaseCount('users', 1);

        $user = User::query()
            ->where('email', 'test@mail.ru')
            ->first();

        $this
            ->withSession(['_token' => 'qwerty'])
            ->put("/user/{$user->id}", [
                '_token' => 'qwerty',
                'name' => 'name',
                'email' => 'changedtest@mail.ru',
                'gender' => 'Мужской',
                'birthday' => '2004-05-06',
            ]);

        $this->assertDatabaseHas('users', [
            'email' => 'changedtest@mail.ru',
        ]);

        $this
            ->withSession(['_token' => 'qwerty'])
            ->delete("/user/{$user->id}", [
                '_token' => 'qwerty',
            ]);

        $this->assertDatabaseCount('users', 0);
    }
}
