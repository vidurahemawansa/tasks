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
    path: 'task-manager', 
    loadChildren: () => import('./task-manager/task-manager.module').then(m => m.TaskManagerModule),
    canActivate: [AuthGuard]
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
