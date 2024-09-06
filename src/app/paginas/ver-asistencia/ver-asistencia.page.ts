import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/autentificacion.service';

@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.page.html',
  styleUrls: ['./ver-asistencia.page.scss'],
})
export class VerAsistenciaPage implements OnInit {
  materias: string[] = []; // Lista de materias
  asistenciaPorcentajes: any = {}; // Almacena los porcentajes de asistencia por materia

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.cargarAsistencia(); // Cargar los porcentajes al iniciar la página
  }

  cargarAsistencia() {
    const asistencia = this.authService.obtenerHistorialAsistencia();
    this.materias = Object.keys(asistencia); // Obtiene las materias
    this.asistenciaPorcentajes = asistencia; // Almacena los porcentajes de asistencia por materia
  }
}
