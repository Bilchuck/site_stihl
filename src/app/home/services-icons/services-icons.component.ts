import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-icons',
  templateUrl: './services-icons.component.html',
  styleUrls: ['./services-icons.component.sass']
})
export class ServicesIconsComponent implements OnInit {
  cols: { text: string; img: ImageData; }[]


  constructor() { 
    this.cols = [
      {
        img: require('../../../assets/stihl.logo.mini.png'),
        text: "Продукція STIHL"
      },
      {
        img: require('../../../assets/viking.logo.mini.png'),
        text: "Продукція VIKING"
      },
      {
        img: require('../../../assets/accum.logo.png'),
        text: "Акумуляторна техніка"
      },
      {
        img: require('../../../assets/instrum.logo.png'),
        text: "Комплектуючі і ручний інструмент"
      },
      {
        img: require('../../../assets/zapchas.logo.png'),
        text: "Запасні частини"
      },
      {
        img: require('../../../assets/souvenirs.logo.png'),
        text: "Сувеніри"
      }
    ]
  }

  ngOnInit() {
  }

}
