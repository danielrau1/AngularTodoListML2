import { Component, OnInit } from '@angular/core';
import {TodoService} from '../models/todo.service'; // [2.2b]

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass']
})
export class AddItemComponent implements OnInit {
  title: string; // [2.1c]

                          // [2.2b]
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }


  // [2.2b]
  onSubmit() {
// console.log(this.title);
    this.todoService.addTodo(this.title);

  }
}
