import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinIndexComponent } from './sin-index.component';

describe('SinIndexComponent', () => {
  let component: SinIndexComponent;
  let fixture: ComponentFixture<SinIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
