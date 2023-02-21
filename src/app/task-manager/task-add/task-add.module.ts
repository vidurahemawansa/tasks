import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskAddRoutingModule } from './task-add-routing.module';
import { TaskAddComponent } from './task-add.component';


@NgModule({
  declarations: [
    TaskAddComponent
  ],
  imports: [
    CommonModule,
    TaskAddRoutingModule
  ]
})
export class TaskAddModule { }
