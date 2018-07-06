import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-sales-banner',
  templateUrl: './sales-banner.component.html',
  styleUrls: ['./sales-banner.component.sass']
})
export class SalesBannerComponent implements OnInit {
  @Input() sales: IProduct[];

  constructor() { }

  ngOnInit() {
  }

}
