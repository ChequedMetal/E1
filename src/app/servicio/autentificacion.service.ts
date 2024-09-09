import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    {
      email: 'hola@gmail.com', password: '123456', qrCode: 'hola@gmail.com', img:'assets/imagenes/women.png',
      attendance: [
        {
          seccion: 'PROGRAMACION DE APLICACIONES MOVILES_003V',
          asistencia: [
            { claseId: 'PAM01', fecha: '2024-08-27', asistido: true, },
            { claseId: 'PAM02', fecha: '2024-09-01', asistido: false, },
            { claseId: 'PAM03', fecha: '2024-09-05', asistido: true, }
          ]
        },
        {
          seccion: 'INGLES_002V',
          asistencia: [
            { claseId: 'ENG01', fecha: '2024-08-26', asistido: false, },
            { claseId: 'ENG02', fecha: '2024-08-30', asistido: true, },
            { claseId: 'ENG03', fecha: '2024-09-02', asistido: true, }
          ]
        },
        {
          seccion: 'ESTADISTICA DESCRIPTIVA_001M',
          asistencia: [
            { claseId: 'ED01', fecha: '2024-08-28', asistido: true, },
            { claseId: 'ED02', fecha: '2024-09-03', asistido: false, },
            { claseId: 'ED03', fecha: '2024-09-06', asistido: true, }
          ]
        },
        {
          seccion: 'ETICA_002M',
          asistencia: [
            { claseId: 'ET01', fecha: '2024-08-25', asistido: true, },
            { claseId: 'ET02', fecha: '2024-08-29', asistido: false, },
            { claseId: 'ET03', fecha: '2024-09-04', asistido: true, }
          ]
        },
        {
          seccion: 'ARQUITECTURA Y CALIDAD DE SOFTWARE_004N',
          asistencia: [
            { claseId: 'ACS01', fecha: '2024-08-27', asistido: true,  },
            { claseId: 'ACS02', fecha: '2024-08-31', asistido: true,  },
            { claseId: 'ACS03', fecha: '2024-09-05', asistido: false, }
          ]
        }
      ]
    },
    {
      email: 'si@gmail.com', password: 'password', qrCode: 'si@gmail.com',img:'assets/imagenes/men.png',
      attendance: [
        {
          seccion: 'PROGRAMACION DE APLICACIONES MOVILES_003V',
          asistencia: [
            { claseId: 'PAM201', fecha: '2024-08-28', asistido: true },
            { claseId: 'PAM202', fecha: '2024-09-02', asistido: true },
            { claseId: 'PAM203', fecha: '2024-09-06', asistido: false }
          ]
        },
        {
          seccion: 'INGLES_002V',
          asistencia: [
            { claseId: 'ENG201', fecha: '2024-08-26', asistido: true },
            { claseId: 'ENG202', fecha: '2024-08-30', asistido: false },
            { claseId: 'ENG203', fecha: '2024-09-02', asistido: true }
          ]
        },
        {
          seccion: 'ESTADISTICA DESCRIPTIVA_001M',
          asistencia: [
            { claseId: 'ED201', fecha: '2024-08-28', asistido: false },
            { claseId: 'ED202', fecha: '2024-09-03', asistido: true },
            { claseId: 'ED203', fecha: '2024-09-06', asistido: false }
          ]
        },
        {
          seccion: 'ETICA_002M',
          asistencia: [
            { claseId: 'ET201', fecha: '2024-08-25', asistido: true },
            { claseId: 'ET202', fecha: '2024-08-29', asistido: true },
            { claseId: 'ET203', fecha: '2024-09-04', asistido: false }
          ]
        },
        {
          seccion: 'ARQUITECTURA Y CALIDAD DE SOFTWARE_004N',
          asistencia: [
            { claseId: 'ACS201', fecha: '2024-08-27', asistido: true },
            { claseId: 'ACS202', fecha: '2024-08-31', asistido: false },
            { claseId: 'ACS203', fecha: '2024-09-05', asistido: true }
          ]
        }
      ]
    }
  ];

  private currentUser: any = null;

  constructor() {}

  iniciarSesion(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.currentUser = user;
      return true;
    } else {
      return false;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('user');
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  obtenerUsuarioAutenticado() {
    if (!this.currentUser && localStorage.getItem('user')) {
      this.currentUser = JSON.parse(localStorage.getItem('user')!);
    }
    return this.currentUser;
  }

  obtenerHistorialAsistencia(): any {
    const usuario = this.obtenerUsuarioAutenticado();
    return usuario ? usuario.attendance : [];
  }
}
