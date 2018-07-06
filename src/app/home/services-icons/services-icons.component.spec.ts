import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIconsComponent } from './services-icons.component';

describe('ServicesIconsComponent', () => {
  let component: ServicesIconsComponent;
  let fixture: ComponentFixture<ServicesIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
