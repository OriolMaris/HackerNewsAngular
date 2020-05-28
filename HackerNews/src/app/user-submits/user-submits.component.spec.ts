import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmitsComponent } from './user-submits.component';

describe('UserSubmitsComponent', () => {
  let component: UserSubmitsComponent;
  let fixture: ComponentFixture<UserSubmitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubmitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
