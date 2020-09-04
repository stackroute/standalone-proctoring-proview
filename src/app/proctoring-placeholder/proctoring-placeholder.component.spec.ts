import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProctoringPlaceholderComponent } from './proctoring-placeholder.component';

describe('ProctoringPlaceholderComponent', () => {
  let component: ProctoringPlaceholderComponent;
  let fixture: ComponentFixture<ProctoringPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProctoringPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProctoringPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
