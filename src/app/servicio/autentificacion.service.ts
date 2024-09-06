import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    {
      email: 'hola@gmail.com', password: '123456', qrCode: 'hola@gmail.com',
      attendance: {
        'Programación de Aplicaciones Móviles': 95,
        'Inglés': 75,
        'Estadística Descriptiva': 70,
        'Ética': 90,
        'Arquitectura y Calidad de Software': 80,
      }
    }, 
    { email: 'si@gmail.com', password: 'password', qrCode: 'si@gmail.com',
      attendance: {
        'Programación de Aplicaciones Móviles': 75,
        'Inglés': 80,
        'Estadística Descriptiva': 75,
        'Ética': 0,
        'Arquitectura y Calidad de Software': 90,
      }      
     }
  ];

  private currentUser: any = null;

  constructor() {}

  iniciarSesion(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('user');
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
    return usuario ? usuario.attendance : {};
  }
}
