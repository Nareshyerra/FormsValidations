import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NareshComponent } from './naresh.component';

describe('NareshComponent', () => {
  let component: NareshComponent;
  let fixture: ComponentFixture<NareshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NareshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NareshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
