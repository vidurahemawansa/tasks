import { Component } from '@angular/core';
import { TaskManagementService } from '../../shared/services/task.management.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  tasksList: Array<Object>;

  constructor(
    private taskManagementService: TaskManagementService,
    // private activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.tasksList = JSON.parse(localStorage.getItem('task list') || '[]');
    console.log(this.tasksList);
  }

  openAddModal() {
    const modalRef = this.modalService.open(AddComponent);
  }
}
