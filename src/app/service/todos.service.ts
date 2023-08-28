import { Injectable } from '@angular/core';
import { ITodo, ITodoForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  /**
   * @todo - Todos (render the lists)
   * @todoForm - Todo form (get value)
   * @updateThiId - Edit todoId
   */
  todos: ITodo[] = []
  todoForm: ITodoForm = {
    taskName: "",
    taskDescription: ""
  }
  private updateThisId: string = ""

  // Get todos from local storage
  constructor() {
    const getTodos = localStorage.getItem("todos")
    if (getTodos) {
      this.todos = JSON.parse(getTodos)
    }
  }

  setUpdateId(todoId: string): void {
    this.updateThisId = todoId
  }

  getUpdateId(): string {
    return this.updateThisId
  }

  get getTodos(): ITodo[] {
    return this.todos
  }

  get getTodoForm() {
    return this.todoForm
  }

  // clear all values from todo form
  clearForm() {
    this.todoForm.taskName = ""
    this.todoForm.taskDescription = ""
  }

  // Delete a todo
  deleteTodo(id: string) {
    const findTodos = this.todos.findIndex(elm => elm.id === id)
    if (findTodos !== -1) {
      this.todos.splice(findTodos, 1)
      localStorage.setItem('todos', JSON.stringify(this.todos)) // update in local storage
    }
  }

  // Add new todo
  addTodo() {
    // validation
    if (!this.todoForm.taskName) {
      alert("Task name cannot be empty")
      return
    }
    const newTodo: ITodo = {
      name: this.todoForm.taskName,
      description: this.todoForm.taskDescription,
      id: new Date().toString()
    }

    this.todos.push(newTodo)
    this.todoForm.taskName = ""
    this.todoForm.taskDescription = ""

    localStorage.setItem('todos', JSON.stringify(this.todos)) // update in local storage
  }

  // Call to set the Todo form to edit (update)
  updateTodoForm(todoId: string) {
    const findTodo = this.todos.findIndex(elm => elm.id === todoId)
    if (findTodo !== -1) {
      this.todoForm.taskName = this.todos[findTodo].name
      this.todoForm.taskDescription = this.todos[findTodo].description
    }
  }

  // Update a todo
  updateTodo() {
    const findTodo = this.todos.findIndex(elm => elm.id === this.updateThisId)
    if (findTodo !== -1) {
      this.todos[findTodo].name = this.todoForm.taskName
      this.todos[findTodo].description = this.todoForm.taskDescription
      this.todoForm.taskName = ""
      this.todoForm.taskDescription = ""
      this.updateThisId = ""
      localStorage.setItem('todos', JSON.stringify(this.todos)) // update in local storage
    }
  }


  // Remove all todos
  clearAllTodos() {
    const isConfirmed = confirm('Are you sure you want to clear all the tasks')
    if (!isConfirmed) return

    this.todos.length = 0
    localStorage.setItem('todos', JSON.stringify(this.todos)) // update in local storage
  }
}
