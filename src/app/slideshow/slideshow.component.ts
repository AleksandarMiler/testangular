import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})

export class SlideshowComponent implements OnInit {
  images = ['athens.jpg', 'malaga.jpg', 'sevilla.jpg'];
  headlines = [
    'Night at Athens', 'Afternoon at Malaga' , 'Noon at Sevilla'
  ]
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout( ()=> {
        this.showImage = true;
      },100)
    }, 8000);
  }
}