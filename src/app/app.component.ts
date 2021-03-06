import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {TranslateService} from '@ngx-translate/core';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform,private translate:TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleLightContent();
      StatusBar.show();

      Splashscreen.hide();

      console.log('Platforms info ~ ',platform.platforms());
      console.log('Platform Version ~ ',platform.versions());
      console.log('Platform lang ~ ',platform.lang());

      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('en');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use('zh');

    });
  }
}
