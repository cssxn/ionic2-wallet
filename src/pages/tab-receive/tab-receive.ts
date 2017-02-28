import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
/*
  Generated class for the TabReceive page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-receive',
  templateUrl: 'tab-receive.html'
})
export class TabReceivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private translate:TranslateService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabReceivePage');
  }

}
