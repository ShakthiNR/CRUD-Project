import { Component, OnInit } from '@angular/core';
import { ITodo } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle: string = 'Task Management';

  taskName: string = '';
  taskDescription: string = "";

  todos: ITodo[] = []



  ngOnInit(): void {
    const getTodos = localStorage.getItem("todos")
    if (getTodos)
      this.todos = JSON.parse(getTodos);
  }

}
