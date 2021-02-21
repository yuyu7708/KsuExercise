import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginindexComponent } from './loginindex.component';

describe('LoginindexComponent', () => {
  let component: LoginindexComponent;
  let fixture: ComponentFixture<LoginindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
