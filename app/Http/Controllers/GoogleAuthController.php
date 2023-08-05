<?php

namespace App\Http\Controllers;

use App\Models\User;
use ErrorException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Throwable;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
      return Socialite::driver('google')->redirect();
    } 

    public function callbackGoogle()
    {
      try{
            $google_user = Socialite::driver('google')->stateless()->user();
            // dd($google_user);
            $user = User::where('google_id', $google_user->getId())->first();
            if(!$user){
                $new_user = User::create([
                    'name'=>$google_user->getName(),
                    'email'=> $google_user->getEmail(),
                    'google_id'=> $google_user->getId(),
                ]);
                Auth::login($new_user);

                return redirect()->intended('/account');
            }else{
                Auth::login($user);

                return redirect()->intended('/account');
            }
      } catch(Throwable $e){
        dd($e);
      }
    } 
}
