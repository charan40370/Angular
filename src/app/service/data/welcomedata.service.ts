import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
  private http:HttpClient
  ) { }

executeHelloWorldBeanService(){
 // console.log("Execute Hello World Bean Service")
  return this.http.get<HelloWorldBean>('http://localhost:8090/hello-world-bean');
}


executeHelloWorldBeanServiceWithPathVariable(name){
  // console.log("Execute Hello World Bean Service")
  console.log(name);
   return this.http.get<HelloWorldBean>(`http://localhost:8090/hello-world/path-variable/${name}`);
 }


}
