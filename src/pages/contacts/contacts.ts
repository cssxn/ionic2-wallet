import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BaseService } from '../../services/base-service';

/**
 * 联系人列表
 */

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  assets = [];
  constructor(private baseService:BaseService, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.baseService.getAssets().subscribe(res=>{
      console.log(res);
      this.assets = res.assets;
    },err=>{
      console.log('error:~',err);
    });
  }



}
