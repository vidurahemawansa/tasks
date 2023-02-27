import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from '../add/add.component';
import { dropdownFilter, Task } from '../../shared/interfaces/task.interface';
import { TaskManagementService } from '../../shared/services/task.management.service';
import { taskName } from '../../shared/task.enums';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  tasksList: Array<Task>;
  filteredTasksList: Array<Task>;
  filterSelectObj: Array<dropdownFilter>;
  searchTerm: string;
  data: Subscription;

  constructor(
    private modalService: NgbModal,
    private taskManagementService: TaskManagementService
  ) { }

  ngOnInit(): void {
    this.tasksList = this.taskManagementService.getTasksList();
    this.filterChange();
    this.data = this.taskManagementService.data$.subscribe((tasks) => {
      this.resetFilters(tasks);
    });
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
    const value = event?.target?.value;

    if (!value || value === "undefined") {
      this.filteredTasksList = this.tasksList;
    } else {
      this.filteredTasksList = this.taskManagementService.tasksFilter(JSON.parse(value), this.tasksList);
    }
  }

  resetFilters(tasks) :void {
    this.tasksList = tasks;
    this.filteredTasksList = tasks;
    this.setFilterObj();
    this.searchTerm = '';
  }

  ngOnDestroy(): void {
    this.data.unsubscribe();
  }
}
