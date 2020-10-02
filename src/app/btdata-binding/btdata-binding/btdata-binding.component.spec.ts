import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTDataBindingComponent } from './btdata-binding.component';

describe('BTDataBindingComponent', () => {
  let component: BTDataBindingComponent;
  let fixture: ComponentFixture<BTDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
