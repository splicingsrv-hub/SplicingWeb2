import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';
import { CarruselComponent } from '../carrusel/carrusel.component';


@Component({
  selector: 'app-pagina-home',
  imports: [HeaderComponent, NavbarComponent, MainComponent, FooterComponent, CarruselComponent],
  templateUrl: './pagina-home.component.html',
  styleUrl: './pagina-home.component.css'
})
export class PaginaHomeComponent {

}
