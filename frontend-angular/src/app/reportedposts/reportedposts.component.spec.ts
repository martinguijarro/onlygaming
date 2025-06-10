import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedpostsComponent } from './reportedposts.component';

describe('ReportedpostsComponent', () => {
  let component: ReportedpostsComponent;
  let fixture: ComponentFixture<ReportedpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportedpostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
