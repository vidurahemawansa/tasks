import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'task-manager/task-add', loadChildren: () => import('./task-manager/task-add/task-add.module').then(m => m.TaskAddModule) },
  { path: 'task-manager/task-list', loadChildren: () => import('./task-manager/task-list/task-list.module').then(m => m.TaskListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
