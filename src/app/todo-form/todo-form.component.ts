import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  @Output() newTod = new EventEmitter<object>();
  title: string = '';
  Text:string=''
  done:boolean=false
  addTodo(event: Event) {
    event.preventDefault()
    this.newTod.emit({
      title:this.title,
      text:this.Text,
      done:this.done
    })
    this.Text=''
  }
  updateTodoText(event:Event){
    this.Text=(event.target as HTMLInputElement).value;
    console.log(this.Text);

  }
  updateTodoTitle(event:Event){
    this.title=(event.target as HTMLInputElement).value
    console.log(this.title);
  }
  updateTodoStatus(event:Event){
    this.done=(event.target as HTMLInputElement).checked
    console.log(this.done);

  }

}
