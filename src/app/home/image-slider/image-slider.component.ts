import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.sass']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() images: string[];
  currentIndex: number = 0;
  currentImage: string;
  interval;
  time: number = 3000; // 1 sec

  constructor() { }

  right(slider: boolean) {
    if (!slider) {
      clearInterval(this.interval);
    }
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
    this.currentImage = this.images[this.currentIndex];
  }
  left() {
    clearInterval(this.interval);
    this.currentIndex--;
    if (this.currentIndex <= -1) {
      this.currentIndex = this.images.length - 1;
    }
    this.currentImage = this.images[this.currentIndex];
  }

  ngOnInit() {
    this.currentImage = this.images[this.currentIndex];
    this.interval = setInterval(() => {
      this.right(true)
    }, this.time)
  }

  ngOnDestroy() {
    // clean carbage
    clearInterval(this.interval);
  }

}
