import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn : boolean = false;
  constructor(private _router : Router) { }

  
  isAuthenticated() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      // if(localStorage.getItem("token")){
      //   this.isUserLoggedIn = true;
      // } else{
      //   this.isUserLoggedIn = false;
      // }

      localStorage.getItem("token")? this.isUserLoggedIn = true : this.isUserLoggedIn = false;
      resolve(this.isUserLoggedIn)
    })
  }


   logInToapp(){
    // login successful
       this.isUserLoggedIn = true;
   
       localStorage.setItem("userRole", "admin");
       localStorage.setItem("token", "JWT TOKEN");
       this._router.navigate(['/home'])

   }


   logoutFromApp(){
     // api for logoutts
    this.isUserLoggedIn = false;
    localStorage.clear();

    this._router.navigate(['/'])
   }


}

