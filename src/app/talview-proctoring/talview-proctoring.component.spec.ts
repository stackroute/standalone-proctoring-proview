import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalviewProctoringComponent } from './talview-proctoring.component';

describe('TalviewProctoringComponent', () => {
  let component: TalviewProctoringComponent;
  let fixture: ComponentFixture<TalviewProctoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalviewProctoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalviewProctoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
