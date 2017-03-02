import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TabSettings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  unitName: string = 'BTC';
  selectedAlternative: any =  { name: 'US Dollar' };
  currentFeeLevel: string = 'normal'
  feeOpts: any = { 'normal': 'Normal' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabSettingsPage');
  }

}
