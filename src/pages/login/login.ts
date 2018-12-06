import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PoliticsPage } from '../politics/politics';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  politicsPage = PoliticsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
