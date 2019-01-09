import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ComentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-coments',
  templateUrl: 'coments.html',
})
export class ComentsPage {
  idpol:number;
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController) {
      this.idpol = navParams.data;
      this.cargarComentarios();
  }
  cargarComentarios(){
    this.http.get("https://madridpolity.firebaseio.com/comentarios.json")
      .subscribe( (res:any) => {
        this.items = res;
        const loader = this.loadingCtrl.create({
          content: "Espere por favor...",
          duration: 10
        });
        loader.present();
      });
  }

}
