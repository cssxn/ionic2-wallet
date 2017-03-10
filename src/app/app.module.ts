import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, Platform, IonicErrorHandler } from 'ionic-angular';

/**
 *  Plugs
 *  ===============
 */
import { Logger } from 'angular2-logger/core';
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
// Clipboard
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';

/**
 *  Pages
 *  ========
 */
import { MyApp } from './app.component';
import { PAGES } from '../pages/pages';

/**
 * Services
 * =========
 */
import { SERVICES } from '../services/services.service';
@NgModule({
  declarations: [
    MyApp,
    ...PAGES
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
    MyApp,
    ...PAGES
  ],
  providers: [Logger,ClipboardService,...SERVICES, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
