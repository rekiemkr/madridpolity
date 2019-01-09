import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { FormGroup,FormControl} from '@angular/forms';

import { PoliticsPage } from '../politics/politics';
import { ComentsPage } from '../coments/coments';
/**
 * Generated class for the PolitiContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-politi-content',
  templateUrl: 'politi-content.html',
})
export class PolitiContentPage {
  idpol:number;
  polts:any;
  politicos = PoliticsPage;
  coment = ComentsPage;
  cal;
  calForm;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController) {
    this.idpol = navParams.data;
    this.calForm = new FormGroup({
      "cal5": new FormControl({value : "5"}),
      "cal4": new FormControl({value : "4"}),
      "cal3": new FormControl({value : "3"}),
      "cal2": new FormControl({value : "2"}),
      "cal1": new FormControl({value : "1"}),
    });
    this.CargarPoliticos();
  }
  CargarPoliticos(){
    this.http.get("https://madridpolity.firebaseio.com/politicos.json")
      .subscribe( (res:any) => {
        this.polts = res;
        const loader = this.loadingCtrl.create({
          content: "Espere por favor...",
          duration: 10
        });
        loader.present();
      });
  }
  cerrar(){
    this.navCtrl.pop();
  }
  submit(){
    console.log(this.calForm.checked);
  }
}
