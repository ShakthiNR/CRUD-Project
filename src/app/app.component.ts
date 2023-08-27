import { TodosService } from './service/todos.service';
import { Component } from '@angular/core';
import { ITodo } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle: string = 'Task Management';

  creator:string = 'Shakthi N R';
  copyright:string = '@2023'
 
  constructor(private TodosService:TodosService){}
  
  todos:ITodo[] = this.TodosService.getTodos

}
