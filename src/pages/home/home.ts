import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackendService } from '../../services/backend-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private backend: BackendService) {
    this.backend.getAudienciasSugeridas().subscribe((data: any) => {
      this.audiencias = data;
    });
  }
  onInput(event) {
    console.log(event);
  }

  audiencias: any[];
}
