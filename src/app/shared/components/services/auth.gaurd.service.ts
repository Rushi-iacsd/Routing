import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable({

    providedIn : "root"
})
export class AuthGaurd implements CanActivate ,CanActivateChild{
 
     loginStatus : boolean = false;
    constructor(private _router : Router,
        private _authService : AuthService) {}

    canActivate() : boolean | Promise<boolean> | Observable<boolean>{

    return    this._authService.isAuthenticated() 
            .then((loginStatus: boolean) => {
                if(loginStatus ){
                    return true
                } else {
                    this._router.navigate(['/'])
                    return false
                }
            })
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> |  Promise<boolean> {
        
        return    this._authService.isAuthenticated() 
        .then((loginStatus: boolean) => {
            if(loginStatus ){
                return true
            } else {
                this._router.navigate(['/'])
                return false
            }
        })
      }

    }
