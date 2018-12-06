import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PolitiContentPage } from '../politi-content/politi-content';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the PoliticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-politics',
  templateUrl: 'politics.html',
})
export class PoliticsPage {
  politiContent = PolitiContentPage;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,
    public loadingCtrl: LoadingController) {
      this.nombrePoliticos();
  }
  
  nombrePoliticos(){
    this.http.get("../../assets/data/politics.json")
      .subscribe( (res:any) => {
        this.items = res;
        console.log(this.items);
        const loader = this.loadingCtrl.create({
          content: "Espere por favor...",
          duration: 10
        });
        loader.present();
      });
  }
}
