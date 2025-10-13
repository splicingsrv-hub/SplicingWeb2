import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaHomeComponent } from './components/Pagina principal/pagina-home/pagina-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaHomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web_Splicing_2025';
}
