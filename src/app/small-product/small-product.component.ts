import { IProduct } from './../models/IProduct';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-product',
  templateUrl: './small-product.component.html',
  styleUrls: ['./small-product.component.sass']
})
export class SmallProductComponent implements OnInit {
  @Input() product: IProduct;
  link: string;

  constructor() { }

  ngOnInit() {
    this.link = ""
  }

}
