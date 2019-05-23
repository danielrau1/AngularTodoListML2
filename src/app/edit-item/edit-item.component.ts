import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // [4.1c]
import {TodoService} from '../models/todo.service'; // [4.1d]

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.sass']
})
export class EditItemComponent implements OnInit {

  public id ; // [4.1c]
  public title;

                            // [4.1c]             [4.1d]
  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
  // [4.1c]
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.title = (this.route.snapshot.paramMap.get('title'));
  }

  // [4.1d]
onSubmit2() {
   const t = [this.id, this.title];
    // console.log(this.id + ' ' + this.title);
   this.todoService.editTodo(t);
}


}
