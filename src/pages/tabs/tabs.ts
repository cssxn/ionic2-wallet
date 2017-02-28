import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../home/home';
import { TabReceivePage } from '../tab-receive/tab-receive';
import { TabSendPage } from '../tab-send/tab-send';
import { TabSettingsPage } from '../tab-settings/tab-settings';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = TabReceivePage;
  tab3Root: any = TabSendPage;
  tab4Root: any = TabSettingsPage;

  constructor(platform: Platform, private translate:TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      // Set Light StatusBar
      StatusBar.styleLightContent();

      // let status bar overlay webview
      StatusBar.overlaysWebView(true);

      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('en');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use('zh');
    });

  }


}
