import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

// Tabs Page
import { HomePage } from '../home/home';
import { ReceivePage } from '../receive/receive';
import { ScanPage } from '../scan/scan';
import { SendPage } from '../send/send';
import { SettingsPage } from '../settings/settings';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ReceivePage;
  tab3Root: any = SendPage;
  tab4Root: any = SettingsPage;
  tab5Root: any = ScanPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

    });

  }


}
