import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypointsSelectorComponent } from './keypoints-selector.component';

describe('KeypointsSelectorComponent', () => {
  let component: KeypointsSelectorComponent;
  let fixture: ComponentFixture<KeypointsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypointsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypointsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
