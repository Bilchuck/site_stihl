import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBannerComponent } from './sales-banner.component';

describe('SalesBannerComponent', () => {
  let component: SalesBannerComponent;
  let fixture: ComponentFixture<SalesBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
