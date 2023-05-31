import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
   this._authService.logInToapp()

  }


  onLogOut(){

    this._authService.logoutFromApp()
  }
}
