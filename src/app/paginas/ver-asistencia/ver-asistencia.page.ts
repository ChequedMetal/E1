import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { AuthService } from 'src/app/servicio/autentificacion.service';

@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.page.html',
  styleUrls: ['./ver-asistencia.page.scss'],
})
export class VerAsistenciaPage implements OnInit {
  historialAsistencia: any[] = []; 

  constructor(private authService: AuthService, private navCtrl: NavController) {} 

  ngOnInit() {
    this.cargarAsistencia(); 
  }

  cargarAsistencia() {
    this.historialAsistencia = this.authService.obtenerHistorialAsistencia(); 
  }

  volver() {
    this.navCtrl.back(); 
  }
}
