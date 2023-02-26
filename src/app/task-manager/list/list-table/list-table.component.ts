import { Component, Input } from '@angular/core';
import { Task } from '../../../shared/interfaces/task.interface';
import { TaskManagementService } from '../../../shared/services/task.management.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent {
  @Input() tasksList: Array<Task>;
  @Input() searchTerm: string;
  filterMetadata = { count: 0 };

  constructor(
    private taskManagementService: TaskManagementService
  ) { }
    
  changeCompletedStatus(isCompleted: boolean, i: number): void {
    let addedTasks = this.taskManagementService.getTasksList();
    addedTasks[i].isCompleted = !isCompleted;
    this.taskManagementService.setTasksListToLocal(addedTasks);
  }
}
