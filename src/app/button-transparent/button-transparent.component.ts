import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-transparent',
  templateUrl: './button-transparent.component.html',
  styleUrls: ['./button-transparent.component.sass']
})
export class ButtonTransparentComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
    console.log(1)
  }

  isLink(): boolean {
    return typeof this.link === 'string'; 
  }

}
