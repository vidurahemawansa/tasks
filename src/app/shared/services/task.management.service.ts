import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  isDuplicated: boolean;
  constructor() { }

  addTask(task: Task, taskList: Array<Task>) {
    this.isDuplicated = false;
    if(taskList.includes(task)) {
      this.isDuplicated = true;
    } else {
      taskList.push(task);
      localStorage.setItem('task list', JSON.stringify(taskList));
    }
  }

  getDuplicateStatus(): boolean {
    return this.isDuplicated;
  }

  tasksFilter(filterValue: boolean, taskList: Array<Task>) {
    console.log(filterValue);
    const result: Array<Task> = taskList.filter((obj) => {
      return obj.isCompleted === filterValue;
    });
    return result;
  }
}
