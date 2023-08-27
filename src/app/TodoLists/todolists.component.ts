import { TodosService } from './../service/todos.service';
import { Component } from '@angular/core';
import { ITodo } from '../types';

@Component({
    selector: "app-todo-lists",
    templateUrl: "./todolists.component.html",
    styleUrls: ["./todolists.component.css"]
})
export class TodoListsComponent {
    todoLists:ITodo[]


    constructor(private TodosService:TodosService) {
        this.todoLists = TodosService.todos
     }

     deleteTodo(todoId:string) {
        this.TodosService.deleteTodo(todoId)
     }

     updateTodo(todoId:string) {
        this.TodosService.updateTodo(todoId)
        this.TodosService.setIsUpdate(true)
     }

}