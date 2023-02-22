import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerComponent } from './task-manager.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    TaskManagerComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TaskManagerModule {
}
