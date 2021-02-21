import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsindexComponent } from './newsindex.component';

describe('NewsindexComponent', () => {
  let component: NewsindexComponent;
  let fixture: ComponentFixture<NewsindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
