import {Component, Input} from "@angular/core"
import { ITodo } from "../types"

@Component({
    selector:"app-todo-form",
    templateUrl:"./todoform.component.html",
    styleUrls:["./todoform.component.css"]    
})
export class TodoFormComponent{
    
    @Input() taskName:string
    @Input() taskDescription:string
    @Input() todos:ITodo[]

    constructor(){
        this.taskName = ""
        this.taskDescription = ""
        this.todos = []
    }


    addTodos(){
        const newTodo:ITodo = {
            name: this.taskName,
            description: this.taskDescription,
            id: new Date().toString()
        }
        console.log("Called ..", newTodo, this.todos)
        this.todos.push(newTodo)
        localStorage.setItem('todos', JSON.stringify(this.todos))
      
        this.taskName = ""
        this.taskDescription = ""
    }
}