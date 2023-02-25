import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  isDuplicated: boolean;
  constructor() { }

  addTask(task: Task, taskList: Array<Task>) {
    this.isDuplicated = false;
    let isAvailable = _.find(taskList, ['name', task.name]);
    if(!isAvailable) {
      taskList.push(task);
      localStorage.setItem('task list', JSON.stringify(taskList));
    } else {
      this.isDuplicated = true;
    }
  }

  getDuplicateStatus(): boolean {
    return this.isDuplicated;
  }

  tasksFilter(filterValue: boolean, taskList: Array<Task>) {
    const result: Array<Task> = taskList.filter((obj) => {
      return obj.isCompleted === filterValue;
    });
    return result;
  }
}
