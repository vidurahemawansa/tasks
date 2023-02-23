import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Task } from '../../shared/interfaces/task.interface';
import { emailValidator } from '../../shared/directives/email-validator.directive';
import { TaskManagementService } from '../../shared/services/task.management.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  @Input() tasksList: Array<Task>;
  task: Task;
  addForm: FormGroup;
  isDuplicated: boolean;

  constructor(
    private fb: FormBuilder,
    private taskManagementService: TaskManagementService,
    private activeModalRef: NgbActiveModal
  ) {
    this.task = {} as Task;
  }

  ngOnInit(): void {
    this.validateForm();
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
      this.taskManagementService.addTask(this.addForm.value as Task, this.tasksList);
      this.isDuplicated = this.taskManagementService.getDuplicateStatus();
      if(!this.isDuplicated) {
        this.closeModal();
      }
    }
  }

  closeModal() {
    this.activeModalRef.close();
  }

  validateForm() {
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
      isCompleted: new FormControl(false, []),
    });
  }
}
