import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Iusers } from '../../model/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {


  userid !: number;
  userObj !: Iusers;

  constructor(private _userservice : UsersService,
     private _routes : ActivatedRoute,
     private _router : Router,
    ) { }

  ngOnInit(): void {
  
  this._routes.params
   .subscribe((Userparams : Params) => {
    //  console.log(Userparams)
     this.userid = +Userparams['userid']
    //  console.log(this.userid)
   this.userObj = this._userservice.getUser(this.userid)!

  })
  }

  
  onUpdateUser(username : HTMLInputElement){
    let obj: Iusers= {
      username: username.value,
      id: this.userid,
      userRole: this.userObj.userRole
    }

    this._userservice.UpdateUser(obj);
    this._router.navigate(['/users', this.userid])

  }
}