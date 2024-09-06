import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/autentificacion.service';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {
  qrUsuario: string = ''; // Almacena el valor del QR del usuario

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.generarQRUsuario(); // Genera el QR al cargar la página
  }

  generarQRUsuario() {
    const usuario = this.authService.obtenerUsuarioAutenticado(); // Obtiene el usuario autenticado
    if (usuario) {
      this.qrUsuario = usuario.qrCode; // Usa el QR predeterminado del usuario
    } else {
      this.qrUsuario = '';
      alert('Usuario no autenticado. Inicia sesión para ver tu QR.');
    }
  }
}
