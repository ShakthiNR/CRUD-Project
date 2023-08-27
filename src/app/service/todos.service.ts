import { Injectable } from '@angular/core';
import { ITodo, ITodoForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: ITodo[] = []
  todoForm: ITodoForm = {
    taskName: "",
    taskDescription: ""
  }
  private isUpdate: boolean = false


  constructor() {
    const getTodos = localStorage.getItem("todos")
    if (getTodos) {
      this.todos = JSON.parse(getTodos)
    }
  }

  setIsUpdate(isUpdate: boolean): void {
    this.isUpdate = isUpdate
    this.getIsUpdate()
  }


  getIsUpdate(): boolean {
    console.log("ss", this.isUpdate)
    return this.isUpdate
  }

  get getTodos(): ITodo[] {
    return this.todos
  }

  get getTodoForm() {
    return this.todoForm
  }

 


  clearForm(){
    this.todoForm.taskName=""
    this.todoForm.taskDescription=""
}


  deleteTodo(id: string) {
    const findTodos = this.todos.findIndex(elm => elm.id === id)
    if (findTodos !== -1) {
      this.todos.splice(findTodos, 1)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }

  addTodo() {

    if(!this.todoForm.taskName || !this.todoForm.taskName){
      alert("Task name or task description cannot be empty")
      return
    }

    const newTodo: ITodo = {
      name: this.todoForm.taskName,
      description: this.todoForm.taskDescription,
      id: new Date().toString()
    }

    this.todos.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(this.todos))

    this.todoForm.taskName = ""
    this.todoForm.taskDescription = ""
  }


  updateTodo(todoId: string){
    const findTodo = this.todos.findIndex(elm => elm.id === todoId)
    if(findTodo !== -1){
      this.todoForm.taskName = this.todos[findTodo].name
      this.todoForm.taskDescription = this.todos[findTodo].description
    }
  }

}
