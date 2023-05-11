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
      username : "jhonny",
      id:2
    },
    {
      username : "janardhan",
      id:3
    },    
  ]

  constructor() { }

  getAllUsers(){
   return this.userArray;
  }


  getUser(id:number){
    return this.userArray.find(user => user.id ===id)

  }

}
