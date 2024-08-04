import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos : Todo[]=[]
  @Output() newTodos = new EventEmitter<Todo[]>();

  updateStatus(event:Event,id:number){

    for (const item in this.todos) {
      if (this.todos[item].id==id) {
        this.todos[item].done=(event.target as HTMLInputElement).checked
        break;
      }
    }
  }

  onSave(event: Event) {
    const newTodo: Todo[] | undefined = []
    for (const item in this.todos) {
      if (!this.todos[item].done) {
        newTodo.push(this.todos[item])
      }
    }
    if (newTodo) {
      this.newTodos.emit(newTodo);
      console.log(newTodo);

    }
  }


}

interface Todo {
  id:number
  title: string;
  text:string
  done: boolean;
}
