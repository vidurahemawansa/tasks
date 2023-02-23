import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from '../add/add.component';
import { dropdownFilter, Task } from '../../shared/interfaces/task.interface';
import { TaskManagementService } from '../../shared/services/task.management.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  tasksList: Array<Task>;
  filteredTasksList: Array<Task>;
  filterSelectObj: Array<dropdownFilter>;

  constructor(
    private modalService: NgbModal,
    private taskManagementService: TaskManagementService
  ) { }

  ngOnInit(): void {
    this.setFilterObj();
    this.tasksList = JSON.parse(localStorage.getItem('task list') || '[]');
    console.log(this.tasksList);
    this.filteredTasksList = this.tasksList;
  }

  openAddModal() {
    const modalRef = this.modalService.open(AddComponent);
    modalRef.componentInstance.tasksList = this.tasksList;
  }

  setFilterObj() {
    this.filterSelectObj = [
      { name: 'All' },
      { name: 'Activated tasks', value: true },
      { name: 'Inactivated tasks', value: false }
    ];
  }

  filterChange(event?: any) {
    console.log(event.target.value);
    const value = event.target.value;

    if (!value || value === "undefined") {
      this.filteredTasksList = this.tasksList;
    } else {
      this.filteredTasksList = this.taskManagementService.tasksFilter(JSON.parse(value), this.tasksList);
    }
  }
}
