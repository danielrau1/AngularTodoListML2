import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {EditItemComponent} from './edit-item/edit-item.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'edit/:id/:title', component: EditItemComponent}, // [4]

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
