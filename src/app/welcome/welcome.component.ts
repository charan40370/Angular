 import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class WelcomeComponent implements OnInit {
export class WelcomeComponent implements OnInit {

  message : string  =  "Some Welcome Message" // or messag = ""some Welcome Message"
  welcomeMessageFromService:string | undefined
  name = 'Charan'

  //ActivatedRoute
  constructor(private router:ActivatedRoute, private welcomedataService : WelcomedataService) { }

  //void init() {
  ngOnInit() {
    console.log(this.message)
    this.name = this.router.snapshot.params['name']
  }


  getWelcomeMessage() {
    console.log(this.welcomedataService.executeHelloWorldBeanService());
    this.welcomedataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    }

    getWelcomeMessageWithParameter() {
      //console.log(this.welcomedataService.executeHelloWorldBeanServiceWithPathVariable());
      console.log(name);
      this.welcomedataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
        response => this.handleSuccessfulResponse(response)
      );


  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }

}


export class Class1 {

}
