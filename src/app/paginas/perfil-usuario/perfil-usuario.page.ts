import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/autentificacion.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage {
  constructor(private router: Router, private authService: AuthService) {}

  verAsistencia() {
    this.router.navigate(['/ver-asistencia']); // Redirige a la página de historial de asistencia
  }
  
  Registrar() {
    this.router.navigate(['/escanear-qr']); // Redirige a la página de historial de asistencia
  }

  cerrarSesion() {
    this.authService.cerrarSesion(); // Cierra la sesión del usuario
    this.router.navigate(['/login']); // Redirige a la página de login
  }
}
