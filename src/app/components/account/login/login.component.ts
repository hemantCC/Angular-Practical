import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  message;

  constructor(private authService: AuthService, 
    private router: Router, 
    ) { }

  ngOnInit() {
  
  }
  
  verifyUser(username:string,password:string){
    var output= this.authService.verifyUser(username,password);
    if(output==true)
    {
      this.router.navigate(['/shopping-cart']);
    }
    else{

      this.message='Invalid username or password';
    }

  }

}
