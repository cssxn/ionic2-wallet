import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, Platform, IonicErrorHandler } from 'ionic-angular';

/**
 *  Plugs
 *  ===============
 */

// Interceptor
import { HttpInterceptorModule, HttpInterceptor } from 'angular2-http-interceptor';
import { AuthInterceptor } from './app.authInterceptor';

// translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

// QrCode
import { QRCodeModule } from 'angular2-qrcode';

/**
 *  Pages
 *  ===============
 */

// Other
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

// tabs
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabReceivePage } from '../pages/tab-receive/tab-receive';
import { TabSendPage } from '../pages/tab-send/tab-send';
import { TabSettingsPage } from '../pages/tab-settings/tab-settings';

// Providers
import { BaseService } from '../providers/base-service';
import { WindowRef } from '../providers/WindowRef';


let providers = [
  MyApp,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage,
  LoginPage,
  TabReceivePage,
  TabSendPage,
  TabSettingsPage
];


@NgModule({
  declarations: [
    ...providers
  ],
  imports: [

    // http拦截器
    HttpInterceptorModule.withInterceptors([{
      deps: [Platform],
      provide: HttpInterceptor,
      useClass: AuthInterceptor,
      multi: true
    }]),
    // i18n
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    // QRCode
    QRCodeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...providers
  ],
  providers: [BaseService, WindowRef,{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
