import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthService } from '@auth0/auth0-angular';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
      imports: [AuthModule.forRoot({
        domain: 'dev-clqpfsy6d6v8qggc.uk.auth0.com',
        clientId: '7iOePlIvkLSV1aloR4XZRFJm8zArj1ZR',
        authorizationParams: {
          redirect_uri: window.location.origin + '/task-manager'
        }
      })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
