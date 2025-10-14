import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})

export class CarruselComponent implements OnInit, OnDestroy {

  images: string[] = [
    'asset/Imagenes/Carrusel/slider1.jpg',
    'asset/Imagenes/Carrusel/Imagen2.jpg',
    'asset/Imagenes/Carrusel/Grafan.jpg',
       'asset/Imagenes/Carrusel/mario.jpg',
       'asset/Imagenes/Carrusel/omega.jpg'
  ];

  currentIndex = 0;
  autoSlideInterval: any;

  // 🚀 Inicia el carrusel automático al cargar el componente
  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Cambia cada 4 segundos (ajusta si deseas más rápido o lento)
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  // 🧹 Limpia el intervalo cuando se destruye el componente
  ngOnDestroy() {
    this.stopAutoSlide();
  }
}










/*



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

*/