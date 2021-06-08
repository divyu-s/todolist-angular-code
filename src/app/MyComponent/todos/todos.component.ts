import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  toggleTodo(todo:Todo){
    let index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
  }
}
