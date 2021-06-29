import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targeDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined
  message: string | undefined
  // = [
  //   new Todo(1,'Learn to Code',false, new Date()),
  //   new Todo(2,'Become Expert at Angular & Java along with AWS',false, new Date()),
  //   new Todo(3,'Become multi millionaire & Travel around luxuriously',false, new Date())
  //     ]
  //  todo = {
  //    id : 1,
  //    description : 'Learn to Dance'
  //  }


  // = [
  //   new Todo(1,'Learn to Code',false, new Date()),
  //   new Todo(2,'Become Expert at Angular & Java along with AWS',false, new Date()),
  //   new Todo(3,'Become multi millionaire & Travel around luxuriously',false, new Date())
  //     ]

  //  todo = {
  //    id : 1,
  //    description : 'Learn to Dance'
  //  }


  constructor(
    private todoService:TodoDataService
  ) {

   }

  ngOnInit(){
     this.todoService.retrieveAllTodos('Charan').subscribe(
      response => {
        console.log(this.todos = response);
        this.todos = response;
      }
    )
  }


  deleteTodo(id) {
    console.log(`delete todo {id}`);
    this.todoService.deleteTodo('Charan',id).subscribe(
       response => {
        console.log(response);
        this.message = `Delete Successful!`
      }
      )
    }




}
