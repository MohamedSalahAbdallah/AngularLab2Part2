import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo';


  todos: Todo[] = [
    {id: 1, title: 'Buy milk', done: false},
    {id: 2, title: 'Walk the dog', done: true},
    {id: 3, title: 'Write to the ASSISTANT', done: false}
  ];
}

interface Todo {
  id: number;
  title: string;
  done: boolean;
}
