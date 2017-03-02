import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Clipboard } from 'ionic-native';

/*
  Generated class for the TabReceive page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html'
})
export class ReceivePage {

  private addressQRCode: string = '';
  private pasteAddressButtonTitle: string = '粘贴复制的信息';

  constructor(private toastCtrl: ToastController, private translate: TranslateService) {

    this.addressQRCode = 'hello address!';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabReceivePage');
  }

  /**
   * Paste address
   */
  pasteAddress() {
    console.log('粘贴复制的信息。。。');
    Clipboard.paste().then(
      (resolve: string) => {
        console.log(resolve);
        this.pasteAddressButtonTitle = resolve;
      },
      (reject: string) => {
        console.log('Error: ' + reject);
      }
    );

  }


  /**
   * Copy address
   */
  copyAddress(beCopyAddress: string) {
    console.log('copyAddress ～', beCopyAddress);
    Clipboard.copy(beCopyAddress);
    this.presentToast();
  }

  /**
   * Show it, When Copy Address success
   */
  presentToast() {

    let toast = this.toastCtrl.create({
      message: '已复制到剪切板',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
