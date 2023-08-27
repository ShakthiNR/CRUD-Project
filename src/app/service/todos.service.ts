import { Injectable, OnInit } from '@angular/core';
import { ITodo, ITodoForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TodosService implements OnInit {

  todos: ITodo[] = []
  todoForm:ITodoForm ={
    taskName: "",
    taskDescription: ""
  }
  

  constructor() { }

  ngOnInit(): void {
    const getTodos = localStorage.getItem("todos")
    if (getTodos)
      this.todos = JSON.parse(getTodos);
  }

  get getTodos(): ITodo[] {
    return this.todos
  }

  get getTodoForm() {
    return this.todoForm
  }

 
  deleteTodo(id: string) {
    const findTodos = this.todos.findIndex(elm => elm.id === id)
    if (findTodos !== -1) {
      this.todos.splice(findTodos, 1)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }

  addTodos() {
    console.log("Check ans ", this.todoForm.taskDescription, this.todoForm.taskName)
    const newTodo: ITodo = {
      name: this.todoForm.taskName,
      description: this.todoForm.taskDescription,
      id: new Date().toString()
    }

    console.log("New Todo", newTodo)
    this.todos.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(this.todos))

    this.todoForm.taskName = ""
    this.todoForm.taskDescription = ""
  }

}
