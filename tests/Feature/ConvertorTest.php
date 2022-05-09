<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ConvertorTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function dashboard_props()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $this->get('/')
            ->assertInertia(fn (Assert $page) => $page
                ->component('Currency Convertor')
                ->has('currencies')
            );
    }
}
