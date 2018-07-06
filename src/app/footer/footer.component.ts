import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  headerLogo = require("../../assets/header.logo.png")
  stihlLogo = require("../../assets/stihl.logo.mini.png")
  vikingLogo = require("../../assets/viking.logo.mini.png")

  constructor() { }

  ngOnInit() {
  }

}
