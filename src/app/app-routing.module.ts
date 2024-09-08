import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login', //aca se crea el nombre con la que se llamara la pagina
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./paginas/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./paginas/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./paginas/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./paginas/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./paginas/escanear-qr/escanear-qr.module').then( m => m.EscanearQrPageModule)
  },
  {
    path: 'ver-asistencia',
    loadChildren: () => import('./paginas/ver-asistencia/ver-asistencia.module').then( m => m.VerAsistenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
