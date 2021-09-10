import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'form', component:AddTaskComponent},
  {path:'editar/:id', component:AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
