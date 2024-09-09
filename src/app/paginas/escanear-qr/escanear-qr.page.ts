import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/autentificacion.service';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {
  qrUsuario: string = ''; 

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.generarQRUsuario(); 
  }

  generarQRUsuario() {
    const usuario = this.authService.obtenerUsuarioAutenticado(); 
    if (usuario) {
      this.qrUsuario = usuario.qrCode; 
    } else {
      this.qrUsuario = '';
      alert('Usuario no autenticado. Inicia sesión para ver tu QR.');
    }
  }
}
