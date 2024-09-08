import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';
import { RegisterPageRoutingModule } from './register-routing.module'; // Importa el módulo de enrutamiento específico de la página

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule  // Asegúrate de que el módulo de enrutamiento esté importado
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
