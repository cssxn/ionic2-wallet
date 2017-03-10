import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Clipboard } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';
import { PlatformInfo } from './platform-info.service';

@Injectable()
export class UtilsService {

  constructor(public logger: Logger, private plt: PlatformInfo,private clipboard:ClipboardService) {
    logger.debug('UtilsService providing ...');

  }


  copy(text: string) {
    if(this.plt.isCordova){
      Clipboard.copy(text);
    }else{
      this.clipboard.copy(text);
    }

  }





}
