import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';
import { Task } from '../../../shared/interfaces/task.interface';
import { TaskManagementService } from '../../../shared/services/task.management.service';

import { ListTableComponent } from './list-table.component';

describe('ListTableComponent', () => {
  let component: ListTableComponent;
  let fixture: ComponentFixture<ListTableComponent>;

  const tasksList: Array<Task> = [
    { name: 'test', owner: 'tt@bt.com', description: 'aaa', isCompleted: false },
    { name: 'test 2', owner: 'tt@bt.com', description: 'aaa', isCompleted: false },
    { name: 'test 3', owner: 'tt@bt.com', description: 'aaa', isCompleted: false }
  ];
  let searchTerm: string = '';
  const filterMetadata = { count: 0 };
  let taskManagementService;

  beforeEach(async () => {
    taskManagementService = jasmine.createSpyObj<TaskManagementService>('TaskManagementService', ['getTasksList', 'setTasksListToLocal']);
    await TestBed.configureTestingModule({
      declarations: [ListTableComponent, FilterPipe],
      providers: [{ provide: TaskManagementService, useValue: taskManagementService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListTableComponent);
    component = fixture.componentInstance;
    component.tasksList = tasksList;

    
    taskManagementService.getTasksList.and.returnValue(tasksList);
    spyOn(component, 'changeCompletedStatus').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeCompletedStatus', () => {
    const updatedList = [
      { name: 'test', owner: 'tt@bt.com', description: 'aaa', isCompleted: false },
      { name: 'test 2', owner: 'tt@bt.com', description: 'aaa', isCompleted: true },
      { name: 'test 3', owner: 'tt@bt.com', description: 'aaa', isCompleted: false }
    ];    
    component.changeCompletedStatus(false, 1);
    fixture.detectChanges();
    expect(taskManagementService.setTasksListToLocal).toHaveBeenCalledWith(updatedList);
  });
});
