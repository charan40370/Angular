import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//this will be loaded from index.html, from ther to Ui. viceversa, from here to backend flow
  templateUrl: './app.component.html',
  //template: '<div>{{title}} : {{message}}<div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to your Angular Course - Charan';
}
