import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { BarcodeScanner ,Dialogs} from 'ionic-native';

/*
  Generated class for the TabSend page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-send',
  templateUrl: 'send.html'
})
export class SendPage {

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabSendPage');

  }


  showDialog(){
    Dialogs.confirm('确定要扫描二维码吗？','扫描二维码',['确定','取消']).then(()=>{
      this.scanner();
    }).catch(()=>{
       console.log('点击了取消');
    });
  }


  /**
   * 开始扫描二维码
   * ============
   */
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
        this.presentToast(address);
         console.debug('扫描结果',address);

      }
    }, (err) => {
      // An error occurred
      console.log('二维码扫描出错了 ～ ',err);
    });
  }


  /**
   * Show Toast
   * =============
   */
  presentToast(text:string) {

    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
