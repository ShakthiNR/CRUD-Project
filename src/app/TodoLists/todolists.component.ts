import { Component, Input } from '@angular/core';
import { ITodo } from '../types';

@Component({
    selector: "app-todo-lists",
    templateUrl: "./todolists.component.html",
    styleUrls: ["./todolists.component.css"]
})
export class TodoListsComponent {
    constructor() { }

    @Input() todoLists: ITodo[] = [];

    deleteTodo(id: string) {
        const findTodos = this.todoLists.findIndex(elm => elm.id === id)
        if (findTodos !== -1) {
            this.todoLists.splice(findTodos, 1)
            localStorage.setItem('todos', JSON.stringify(this.todoLists))
        }
    }
}