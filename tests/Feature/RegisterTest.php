<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function user_can_register_for_an_account()
    {
        $response = $this->post('/register', [
            'email' => $this->faker->email,
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertRedirect('/');
    }

    /** @test */
    public function errors_occurs_when_mandatory_fields_are_not_filled_in()
    {
        $response = $this->post('/register', [
            'last_name' => $this->faker->lastName,
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertSessionHasErrors(['first_name', 'email']);
    }

    /** @test */
    public function error_occurs_when_passwords_do_not_match()
    {
        $response = $this->post('/register', [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->email,
            'password' => 'password',
            'password_confirmation' => 'password1',
        ]);

        $response->assertSessionHasErrors(['password']);
    }

    /** @test */
    public function error_occurs_when_email_is_taken()
    {
        $user = User::factory()->create([
            'password' => $password = Hash::make('password'),
        ]);

        $response = $this->post('/register', [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'email' => 'dannyyounes@gmail.com',
            'password' => 'password',
            'password_confirmation' => 'password1',
        ]);

        $response->assertSessionHasErrors(['email']);
    }

}
