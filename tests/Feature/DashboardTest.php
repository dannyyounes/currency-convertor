<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function dashboard_props()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $this->get('/')
            ->assertInertia(fn (Assert $page) => $page
                ->component('Dashboard')
                ->has('auth.user', fn (Assert $page) => $page
                    ->where('name', $user->first_name .' '.$user->last_name)
                    ->where('id', $user->id)
                )
                ->has('flash', fn (Assert $page) => $page
                    ->where('message', null)
                    ->where('status', null)
                )
                ->has('errors')
            );
    }
}
