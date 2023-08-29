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
   tempEditId: string = ""


   constructor(private TodosService: TodosService) {
      this.todoLists = TodosService.todos
   }

   // For every operation we call fn in the TodosService
   deleteTodo(todoId: string) {

      // Edge case - 1
      const findTodo = this.TodosService.todos.find(todo => todo.id === todoId)
      if (findTodo && this.tempEditId === findTodo.id) {
         this.TodosService.todoForm.taskDescription = ""
         this.TodosService.todoForm.taskName = ""
         this.TodosService.setUpdateId("")

      }
      
      // delete
      this.TodosService.deleteTodo(todoId)

      // Edge case - 2
      if (this.TodosService.todos.length === 0) {
         this.TodosService.todoForm.taskDescription = ""
         this.TodosService.todoForm.taskName = ""
         this.TodosService.setUpdateId("")
      }


   }

   editTodo(todoId: string) {
      this.TodosService.updateTodoForm(todoId)
      this.TodosService.setUpdateId(todoId)
      this.tempEditId = todoId
   }

}