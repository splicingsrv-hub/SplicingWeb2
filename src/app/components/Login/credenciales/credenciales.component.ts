
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credenciales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent {
  user = {
    email: '',
    password: ''
  };

  rememberMe = false;
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = '';

    // Validación mínima
    if (!this.user.email || !this.user.password) {
      this.errorMessage = 'Por favor completa todos los campos.';
      return;
    }

    // Ejemplo de validación: credenciales de prueba
    // Cambia esta lógica por llamada a tu API de autenticación


    //Credenciales


    if (this.user.email === 'admin@admin.com' && this.user.password === '1234') {
      // Si quieres guardar "rememberMe", hazlo aquí (localStorage/sessionStorage)
      if (this.rememberMe) {
        localStorage.setItem('usuario', JSON.stringify({ email: this.user.email }));
      }
      // Redirigir a la página que corresponde después del login
      this.router.navigate(['/tarjetas']); // para la ruta de la pagina de app
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intenta de nuevo.';
    }
  }
}























