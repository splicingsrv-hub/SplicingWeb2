import { Component,  HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = false;

   // Este método se ejecutará cada vez que se cambie el tamaño de la ventana
   @HostListener('window:resize', ['$event'])
   onResize(event: Event) {
     // Aquí puedes ajustar el comportamiento dependiendo del tamaño de la ventana
     const width = window.innerWidth;
     // Si la ventana es mayor que 768px (tamaño de pantalla grande)
     if (width > 768) {
       this.isMenuOpen = false; // Cierra el menú si el tamaño es grande
     }
   }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }



}