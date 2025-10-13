import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  images: string[] = [
    'asset/Imagenes/Carrusel/slider1.jpg',
    'asset/Imagenes/Carrusel/Torres3.jpg',
      'asset/Imagenes/Carrusel/Grafana2.jpg',
   

  ];
  currentIndex = 0;
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
