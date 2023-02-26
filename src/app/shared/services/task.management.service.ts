import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { taskName } from '../task.enums';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  isDuplicated: boolean;
  taskList: Array<Task>;
  constructor() { }

  addTask(task: Task, taskList: Array<Task>) {
    this.isDuplicated = false;
    let isAvailable = _.find(taskList, ['name', task.name]);
    if(!isAvailable) {
      taskList.push(task);
      this.taskList = taskList;
      this.setTasksListToLocal(taskList);
    } else {
      this.isDuplicated = true;
    }
  }

  getDuplicateStatus(): boolean {
    return this.isDuplicated;
  }

  getTasksList(): Array<Task> {
    return this.taskList;
  }

  tasksFilter(filterValue: boolean, taskList: Array<Task>) {
    const result: Array<Task> = taskList.filter((obj) => {
      return obj.isCompleted === filterValue;
    });
    return result;
  }

  setTasksListToLocal(taskList: Array<Task>): void {
    localStorage.setItem(taskName.TASK_LIST, JSON.stringify(taskList));
  }
}
