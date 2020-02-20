import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructiesComponent } from './instructies.component';

describe('InstructiesComponent', () => {
  let component: InstructiesComponent;
  let fixture: ComponentFixture<InstructiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
