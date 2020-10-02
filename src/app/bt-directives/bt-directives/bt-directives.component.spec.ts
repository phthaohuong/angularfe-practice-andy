import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtDirectivesComponent } from './bt-directives.component';

describe('BtDirectivesComponent', () => {
  let component: BtDirectivesComponent;
  let fixture: ComponentFixture<BtDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
