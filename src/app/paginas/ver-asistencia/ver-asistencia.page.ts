import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController de Ionic
import { AuthService } from 'src/app/servicio/autentificacion.service';

@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.page.html',
  styleUrls: ['./ver-asistencia.page.scss'],
})
export class VerAsistenciaPage implements OnInit {
  historialAsistencia: any[] = []; // Define la propiedad para almacenar el historial de asistencia

  constructor(private authService: AuthService, private navCtrl: NavController) {} // Inyecta NavController y AuthService

  ngOnInit() {
    this.cargarAsistencia(); // Cargar el historial de asistencia al iniciar la página
  }

  cargarAsistencia() {
    this.historialAsistencia = this.authService.obtenerHistorialAsistencia(); // Obtiene el historial de asistencia del usuario autenticado
  }

  volver() {
    this.navCtrl.back(); // Utiliza NavController para navegar a la página anterior
  }
}
