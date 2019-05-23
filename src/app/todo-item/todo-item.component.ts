                          // [1.2c]
import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../models/todo'; // [1.2c]
import {TodoService} from '../models/todo.service'; // [3.1b]

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {

  @Input() todo1: Todo; // [1.2c]

                            // [3.1b]
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // [3.1b]
  onDelete(todo1) {
    // console.log(todoItem);
    this.todoService.deleteTodo(todo1);
  }
// [4.1a]
 onEdit(todoItem) {
    // console.log(todo1);
     this.todoService.sendToEdit(todoItem);
  }


}
