import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent {
  constructor(public auth: AuthService) { }

  logout() {
    localStorage.clear();
    this.auth.logout({});
  }
}
