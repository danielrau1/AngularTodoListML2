import { Component, OnInit } from '@angular/core';

import {Todo} from '../models/todo'; // [1.1c]
import {TodoService} from '../models/todo.service'; // [1.1c]


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todos: Todo[];


                          // [1.1c]
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    // console.log(this.todos);
  }

}
