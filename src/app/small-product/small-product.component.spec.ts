import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProductComponent } from './small-product.component';

describe('SmallProductComponent', () => {
  let component: SmallProductComponent;
  let fixture: ComponentFixture<SmallProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
