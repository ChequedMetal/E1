import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AnimationController, Animation } from '@ionic/angular'; 
import { AuthService } from 'src/app/servicio/autentificacion.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;
  
  usuario: any; 
  imagenPerfil: string = ''; 

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private animationCtrl: AnimationController 
  ) {}

  ngOnInit() {
    this.cargarUsuario(); 
  }

  cargarUsuario() {
    this.usuario = this.authService.obtenerUsuarioAutenticado();
    if (this.usuario) {
      this.imagenPerfil = this.usuario.img || 'assets/imagenes/default-profile.png'; 
    }
  }

  verAsistencia() {
    this.playTransitionAnimation(() => {
      this.navCtrl.navigateForward('/ver-asistencia', { animated: false }); 
    });
  }

  Registrar() {
    this.playTransitionAnimation(() => {
      this.navCtrl.navigateForward('/escanear-qr', { animated: false }); 
    });
  }

  cerrarSesion() {
    this.playTransitionAnimation(() => {
      this.authService.cerrarSesion();
      this.navCtrl.navigateRoot('/login', { animated: false }); 
    });
  }
  
  playTransitionAnimation(callback: () => void) {
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(this.container.nativeElement) 
      .duration(500) 
      .easing('ease-in-out') 
      .keyframes([
        { offset: 0, opacity: '1', transform: 'translateX(0)' },
        { offset: 1, opacity: '0', transform: 'translateX(-100%)' },
      ]);

    animation.play().then(() => {
      callback(); 
    });
  }

  volver() {
    this.navCtrl.back(); 
  }
}
