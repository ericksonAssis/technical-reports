import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGridComponent } from './report-grid.component';

describe('ReportGridComponent', () => {
  let component: ReportGridComponent;
  let fixture: ComponentFixture<ReportGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportGridComponent]
    });
    fixture = TestBed.createComponent(ReportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
