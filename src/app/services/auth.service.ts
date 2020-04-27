import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

   verifyUser(username:string,password:string){
    if(username == "hemant" && password == "1234" )
    {
      localStorage.setItem('username',"hemant");
      return true;
    }
    else
    {
      return false;
    }
  }

}
