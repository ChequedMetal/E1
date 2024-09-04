import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/autentificacion.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    const confirmacion = this.authService.login(this.email, this.password);
    if (confirmacion) {
      this.router.navigate(['/perfil-usuario']);
    } else {
      alert('Credenciales incorrectas, por favor intenta de nuevo.');
    }
  }
}
