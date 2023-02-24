import { Component, Input } from '@angular/core';
import { Task } from '../../../shared/interfaces/task.interface';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent {
  @Input() tasksList: Array<Task>;
  @Input() searchTerm: string;
  filterMetadata = { count: 0 };
  initialTaskList: Array<Task>;
    
  ngOnInit() {
    this.initialTaskList = this.tasksList;
  }
  changeCompletedStatus(isCompleted: boolean, i: number) {
    this.initialTaskList[i].isCompleted = !isCompleted;
    localStorage.setItem('task list', JSON.stringify(this.initialTaskList));
  }
}
