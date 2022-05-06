<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class RegisterTest extends DuskTestCase
{
    use DatabaseMigrations;

    protected $faker;

    public function setUp(): void
    {
        parent::setUp();
        $this->faker = \Faker\Factory::create();
    }


    /** @test */
    public function register_page_access()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/register')
                ->assertSee('Register for an account!')
                ->assertSee('FIRST NAME')
                ->assertSee('LAST NAME')
                ->assertSee('EMAIL')
                ->assertSee('PASSWORD')
                ->assertSee('CONFIRM PASSWORD');
        });
    }

    /** @test */
    public function can_submit_registration_form()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/register')
                ->type('first_name', $this->faker->firstName)
                ->type('last_name', $this->faker->lastName)
                ->type('email', $this->faker->email)
                ->type('password', 'password')
                ->type('password_confirmation', 'password')
                ->press('Register')
                ->waitFor('.submit')
                ->assertSee('Account Successfully Created!')
                ->assertSee('You have successfully created an account. We have sent you an email to verify your email address.');
        });
    }
}
