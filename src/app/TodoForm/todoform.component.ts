import { TodosService } from './../service/todos.service';
import { Component, Input } from "@angular/core"
import { ITodo, ITodoForm } from "../types"

@Component({
    selector: "app-todo-form",
    templateUrl: "./todoform.component.html",
    styleUrls: ["./todoform.component.css"]
})
export class TodoFormComponent {

   
    todos: ITodo[] = this.TodosService.getTodos
    todoForm:ITodoForm = this.TodosService.getTodoForm

    constructor(private TodosService: TodosService) {}

    addTodos() {
        this.TodosService.addTodos()
    }

    
}