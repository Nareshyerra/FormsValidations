import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VijayComponent } from './vijay.component';

describe('VijayComponent', () => {
  let component: VijayComponent;
  let fixture: ComponentFixture<VijayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VijayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VijayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
