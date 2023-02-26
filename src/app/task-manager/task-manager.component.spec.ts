import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthService } from '@auth0/auth0-angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TaskManagerComponent } from './task-manager.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerComponent;
  let fixture: ComponentFixture<TaskManagerComponent>;
  let auth: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskManagerComponent],
      providers: [AuthService],
      imports: [AuthModule.forRoot({
        domain: 'dev-clqpfsy6d6v8qggc.uk.auth0.com',
        clientId: '7iOePlIvkLSV1aloR4XZRFJm8zArj1ZR',
        authorizationParams: {
          redirect_uri: window.location.origin + '/task-manager'
        }
      })],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
