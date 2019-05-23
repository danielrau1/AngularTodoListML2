import { Injectable } from '@angular/core';
import {Todo} from './todo'; // [1.1a]
import {Router} from '@angular/router'; // [4.1b]


@Injectable({
  providedIn: 'root'
})


export class TodoService {

  id = 3; // [2.2b] will need initial id

todos: Todo[] = [
  {
    id: 1,
    title: 'Todo One',
    completed: false
  },
  {
    id: 2,
    title: 'Todo Two',
    completed: true
  },
  {
    id: 3,
    title: 'Todo Three',
    completed: false
  }
];
                      // [4.1b]
  constructor(private router: Router) { }


// [1.1c]
  getTodos() {
    return this.todos;
  }


  // [2.2b]
  addTodo(title1) {
    // console.log(todoItem);
    this.id += 1;
    const todo = {
      id: this.id,
     title: title1,
      completed: false
  };
    this.todos.push(todo);
}


// [3.1c]
  deleteTodo(todoItem) {
     console.log(todoItem);
     // this.todos = this.todos.filter(t => t.id !== todoItem.id);

     for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === todoItem.id) {
        this.todos.splice(i, 1);
        break;
      }
     }
  }

  // [4.1b]
  sendToEdit(todo) {
   // console.log(id);
    this.router.navigate(['/edit', todo.id, todo.title]);
  }

  // [4.1e]
  editTodo(t) {
   // console.log(t[0] + ' ' + t[1]);
    for (let i = 0; i < this.todos.length; i++) {
      if (t[0] === this.todos[i].id) {
        this.todos[i].title = t[1];
        break;
      }
    }
    console.log(this.todos);
    this.router.navigate(['']);
  }
}
