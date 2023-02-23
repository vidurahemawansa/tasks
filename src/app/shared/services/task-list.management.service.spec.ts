import { TestBed } from '@angular/core/testing';

import { TaskListManagementService } from './task-list.management.service';

describe('TaskListManagementService', () => {
  let service: TaskListManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskListManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
