import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password) {
    //console.log('before'+this.isUserLoggedIn)
    if(username==="charan3778" && password==='charan123') {
      sessionStorage.setItem('authenticateUser', username);
     // console.log('before'+this.isUserLoggedIn)
    return true;
    }
      return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}
