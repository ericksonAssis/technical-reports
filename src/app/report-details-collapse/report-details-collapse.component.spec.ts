import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailsCollapseComponent } from './report-details-collapse.component';

describe('ReportDetailsCollapseComponent', () => {
  let component: ReportDetailsCollapseComponent;
  let fixture: ComponentFixture<ReportDetailsCollapseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportDetailsCollapseComponent]
    });
    fixture = TestBed.createComponent(ReportDetailsCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
