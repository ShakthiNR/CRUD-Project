import { TodosService } from './../service/todos.service';
import { Component } from '@angular/core';
import { ITodo } from '../types';

@Component({
   selector: "app-todo-lists",
   templateUrl: "./todolists.component.html",
   styleUrls: ["./todolists.component.css"]
})
export class TodoListsComponent {
   todoLists: ITodo[]


   constructor(private TodosService: TodosService) {
      this.todoLists = TodosService.todos
   }

   // For every operation we call fn in the TodosService
   deleteTodo(todoId: string) {
      this.TodosService.deleteTodo(todoId)
   }

   editTodo(todoId: string) {
      this.TodosService.updateTodoForm(todoId)
      this.TodosService.setUpdateId(todoId)
   }

}