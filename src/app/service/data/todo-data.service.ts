import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
    ) { }

  retrieveAllTodos(username){
    // console.log("Execute Hello World Bean Service")
    console.log(name);
     return this.http.get<Todo[]>(`http://localhost:8090/users/${username}/todos`);
   }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8090/users/${username}/todos/${id}`);
  }

}
