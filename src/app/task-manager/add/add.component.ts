import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Task } from '../../shared/interfaces/task.interface';
import {emailValidator} from '../../shared/directives/email-validator.directive';
import {TaskManagementService} from '../../shared/services/task.management.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  task: Task;
  addForm: FormGroup;
  isDuplicated: boolean;

  constructor(
    private fb: FormBuilder,
    private taskManagementService: TaskManagementService
    ) 
    {
    this.task = {} as Task;
   }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(this.task.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      owner: new FormControl(this.task.owner, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      description: new FormControl(this.task.description, []),
    });
  }

  get name() {
    return this.addForm.get('name')!;
  }
  get owner() {
    return this.addForm.get('owner')!;
  }

  onSubmit() {
    this.isDuplicated = false;
    if (this.addForm.invalid) {
      for (const control of Object.keys(this.addForm.controls)) {
        this.addForm.controls[control].markAsTouched();
      }
      return;
    } else {
      this.taskManagementService.addTask(this.addForm.value as Task);
      this.isDuplicated = this.taskManagementService.getDuplicateStatus();
      console.log(this.isDuplicated);
    }
  }
}
