<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    public function store(RegisterRequest $request)
    {
        $user = User::create($request->validated());

        auth()->login($user);

        return redirect()->route('dashboard')->with([
            'status' => 'success',
            'message' => 'You have successfully created an account. We have sent you an email to verify your email address.',
        ]);
    }
}
