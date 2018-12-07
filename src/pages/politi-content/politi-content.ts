import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController) {
    this.idpol = navParams.data;
    this.CargarPoliticos();
  }
  CargarPoliticos(){
    this.http.get("../../assets/data/politics.json")
      .subscribe( (res:any) => {
        this.polts = res;
        console.log(res);
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
}
