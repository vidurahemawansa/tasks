import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'task-manager/task-add',
    loadChildren: () => import('./task-manager/task-add/task-add.module').then(m => m.TaskAddModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'task-manager/task-list',
    loadChildren: () => import('./task-manager/task-list/task-list.module').then(m => m.TaskListModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
