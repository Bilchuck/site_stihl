import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTransparentComponent } from './button-transparent.component';

describe('ButtonTransparentComponent', () => {
  let component: ButtonTransparentComponent;
  let fixture: ComponentFixture<ButtonTransparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTransparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
