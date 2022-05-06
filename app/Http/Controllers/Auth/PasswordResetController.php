<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\Auth\PasswordReset;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PasswordResetController extends Controller
{
    public function edit(Request $request)
    {
        $token = $request->token;

        return Inertia::render('Auth/PasswordReset', compact('token'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $updatePassword = DB::table('password_resets')
            ->where([
                'email' => $request->email,
                'token' => $request->token
            ])
            ->first();

        if (!$updatePassword) {
            return redirect('/login')->with('flash', [
                'status' => 'error',
                'message' => 'The token is invalid. Attempt to reset your password again',
            ]);
        }

        $user = User::where('email', $request->email)
            ->update(['password' => Hash::make($request->password)]);

        if (!$user) {
            return redirect('/login')->with('flash', [
                'status' => 'error',
                'message' => 'Your token has expired',
            ]);
        }

        DB::table('password_resets')->where(['email' => $request->email])->delete();

        return redirect('/login')->with('flash', [
            'status' => 'error',
            'message' => 'Your password has been successfully updated',
        ]);
    }
}
