import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BaseService } from '../../services/base-service';

// var Mnemonic = require('bitcore-menmonic');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  assets = [];
  constructor(private baseService:BaseService, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.baseService.getAssets().subscribe(res=>{
      console.log(res);
      this.assets = res.assets;
    },err=>{
      console.log('error:~',err);
    });
  }

  /**
   * 跳转到登录页面
   */
  presentLoginModal() {
    // let modal = this.modalCtrl.create();
    // modal.present();
  }

}
