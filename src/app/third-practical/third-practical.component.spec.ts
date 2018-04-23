import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPracticalComponent } from './third-practical.component';

describe('ThirdPracticalComponent', () => {
  let component: ThirdPracticalComponent;
  let fixture: ComponentFixture<ThirdPracticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPracticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
