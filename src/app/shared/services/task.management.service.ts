import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  taskList: Array<Object> = [];
  isDuplicated: boolean;
  constructor() { }

  addTask(task: Task) {
    this.isDuplicated = false;
    if(this.taskList.includes(task)) {
      this.isDuplicated = true;
    } else {
      this.taskList.push(task);
      localStorage.setItem('task list', JSON.stringify(this.taskList));
    }
  }

  getDuplicateStatus(): boolean {
    return this.isDuplicated;
  }
}
