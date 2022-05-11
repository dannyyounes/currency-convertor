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
    public function currency_convertor_props()
    {
        $user = User::factory()->create();

        $this->actingAs($user);


    }
}
