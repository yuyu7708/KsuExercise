import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiComponent } from './resource-api.component';

describe('ResourceApiComponent', () => {
  let component: ResourceApiComponent;
  let fixture: ComponentFixture<ResourceApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
