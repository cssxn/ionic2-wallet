import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

/*
  Generated class for the TabSend page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-send',
  templateUrl: 'tab-send.html'
})
export class TabSendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabSendPage');

  }


  scanner() {

    console.log('开始扫描二维码。。');
    BarcodeScanner.scan().then((barcodeData) => {

      console.log('二维码扫描结果 ~ ',barcodeData);

      if(barcodeData.cancelled){
        // 取消扫描

        console.debug('取消扫描');
      }else{
        // 扫描结果
        let address = barcodeData.text;
         console.debug('扫描结果',address);

      }
    }, (err) => {
      // An error occurred
      console.log('二维码扫描出错了 ～ ',err);
    });
  }
}
