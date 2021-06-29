import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'charan3778'
  password = "charan123"
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  //Router -> Need this inorder to get Welcome page for navigating after succesful login
  //we can use dependency injection to get welcome page here after succesfull login



  constructor(private router: Router,
     private hardcodedAuthenticationService:HardcodedAuthenticationService ) { }// this will inject Router into this login file, in java
                                  // we use constructor or setter injection but in Angular just Router

  ngOnInit(): void {
  }

handleLogin() {
  // console.log("hello"+" " +this.username);
  // console.log("hello"+" " +this.password);
 // if(this.username === "charan3778" && this.password === "charan123") {
  if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
    this.router.navigate(['welcome/charan'])
    this.invalidLogin = false

  } else {
    this.invalidLogin = true
  }

}


}
