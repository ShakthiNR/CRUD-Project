import { TodosService } from './../service/todos.service';
import { Component, DoCheck } from "@angular/core"
import { ITodo, ITodoForm } from "../types"

@Component({
    selector: "app-todo-form",
    templateUrl: "./todoform.component.html",
    styleUrls: ["./todoform.component.css"]
})
export class TodoFormComponent implements  DoCheck   {

    todos: ITodo[] = this.TodosService.getTodos
    todoForm:ITodoForm = this.TodosService.getTodoForm
    isThisUpdateId: string | undefined

    constructor(private TodosService: TodosService) { }

    ngDoCheck(): void {
        if(this.TodosService.getUpdateId() !== this.isThisUpdateId) {
            this.isThisUpdateId = this.TodosService.getUpdateId();
        }
    }

    // For every operation we call fn in the TodosService
    clearThisForm(){
        this.TodosService.clearForm()
    }

    addTodos() {
        this.TodosService.addTodo()
    }

    updateTodo(){
        this.TodosService.updateTodo()
    }
}