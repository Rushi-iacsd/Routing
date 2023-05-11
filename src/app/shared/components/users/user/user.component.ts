import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Iusers } from "../../model/users";
import { UsersService } from "../../services/users.service";


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
  })
export class UserComponent implements OnInit{

    userid!: number;
    userObj !: Iusers;


    constructor(private _route : ActivatedRoute,
      private _usersservice : UsersService){}


       ngOnInit(): void {
        console.log(this._route.snapshot)
        
        // this.userid =+this._route.snapshot.params['userid']
        // this.userObj= this._usersservice.getUser(this.userid)!;

          this._route.params
             .subscribe((params: Params) => {
              console.log(params)
            this.userid = +params['userid']
            this.userObj = this._usersservice.getUser(this.userid)!;
        })
      }
    }
