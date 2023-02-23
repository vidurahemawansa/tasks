import { Component, Input } from '@angular/core';
import { Task } from '../../../shared/interfaces/task.interface';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent {
  @Input() tasksList: Array<Task> | null;

  changeCompletedStatus(isCompleted: boolean, i: number) {
    console.log(i, isCompleted);
  }
}
