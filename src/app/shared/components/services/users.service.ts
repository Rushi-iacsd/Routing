import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userArray : Array<Iusers> = [
    {
      username : "jhon",
      id:1,
      userRole : "admin"
    },
    {
      username : "jhonny",
      id:2,
userRole : "admin"
    },
    {
      username : "janardhan",
      id:3,
userRole : "user"
    },    
  ]

  constructor() { }

  getAllUsers(){
   return this.userArray;
  }


  getUser(id:number){
    return this.userArray.find(user => user.id ===id)

  }


  UpdateUser(user : Iusers){
      
    this.userArray.forEach(u => {
      if(u.id  === user.id){
        u.username = user.username;
      }
    })
    
  }

}
