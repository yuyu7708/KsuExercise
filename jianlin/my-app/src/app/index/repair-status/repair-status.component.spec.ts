import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairStatusComponent } from './repair-status.component';

describe('RepairStatusComponent', () => {
  let component: RepairStatusComponent;
  let fixture: ComponentFixture<RepairStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
