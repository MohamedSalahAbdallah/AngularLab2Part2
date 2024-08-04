import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoFormComponent,TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo';


  todos: Todo[] = [
    {id:1, title: 'Buy milk',text:"go to the store" ,done: false},
    {id:2, title: 'Walk the dog',text:"go to the dog park" ,done: true},
    {id:3, title: 'Write to the ASSISTANT',text:"update her on new tasks" ,done: false}
  ];

//   newTodo:string[]=[]

addTodo(newTodo:any) {
  const id = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
  this.todos.push({
    id,
    text: newTodo.text,
    title: newTodo.title,
    done: false
  });
  console.log(this.todos);
}

 onNewTodos(e : Todo[]){
  this.todos.length=0;
  for (const item of e) {
    this.todos.push(item);
  }
 }
}


interface Todo {
  id:number;
  title: string;
  text:string
  done: boolean;
}
