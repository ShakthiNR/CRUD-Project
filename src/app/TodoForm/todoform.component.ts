import { TodosService } from './../service/todos.service';
import { Component } from "@angular/core"
import { ITodo, ITodoForm } from "../types"

@Component({
    selector: "app-todo-form",
    templateUrl: "./todoform.component.html",
    styleUrls: ["./todoform.component.css"]
})
export class TodoFormComponent  {

   
    todos: ITodo[] = this.TodosService.getTodos
    todoForm:ITodoForm = this.TodosService.getTodoForm
    isUpdate: boolean

    constructor(private TodosService: TodosService) {
        this.isUpdate = this.TodosService.getIsUpdate()
    }

    clearThisForm(){
        this.TodosService.clearForm()
    }

    addTodos() {
        this.TodosService.addTodo()
    }

}