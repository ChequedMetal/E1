import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController de Ionic

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  constructor(private navCtrl: NavController) { } // Injecta NavController

  ngOnInit() {}

  volver() {
    this.navCtrl.back(); // Utiliza NavController para navegar a la página anterior
  }
}
