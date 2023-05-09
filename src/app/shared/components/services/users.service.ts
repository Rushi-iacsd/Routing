import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userArray : Array<Iusers> = [
    {
      username : "jhon",
      id:1
    },
    {
      username : "june",
      id:2
    },
    {
      username : "may",
      id:3
    },    
  ]

  constructor() { }

  getAllUsers(){
    return this.userArray;
  }


}
