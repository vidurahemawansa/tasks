import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAuthenticated: boolean = false;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    this.auth.isAuthenticated$.subscribe({
      next: (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
        this.router.navigate(['/task-manager']);
      },
      error: (msg) => {
        console.error('Cannot authenticate')
      }
    })
  }

}
