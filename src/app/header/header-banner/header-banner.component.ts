import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.sass']
})
export class HeaderBannerComponent implements OnInit {
  headerLogo = require("../../../assets/header.logo.png")
  stihlLogo = require("../../../assets/stihl.logo.mini.png")
  vikingLogo = require("../../../assets/viking.logo.mini.png")

  constructor() { }

  ngOnInit() {
  }

}
