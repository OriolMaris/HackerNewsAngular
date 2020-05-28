import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsubmitComponent } from './newsubmit.component';

describe('NewsubmitComponent', () => {
  let component: NewsubmitComponent;
  let fixture: ComponentFixture<NewsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
