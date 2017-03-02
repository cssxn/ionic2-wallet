import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Logger } from 'angular2-logger/core';

import { ScannerService } from './scanner.service';

interface  IncomingDataType {
  type: string;
  parsedData: any;
}

@Injectable()
export class IncomingDataService {

  bitcore: any;

  actionSheetSubject: Subject<any> = new Subject<any>();
  actionSheetObservable: Observable<any> = this.actionSheetSubject.asObservable();

  constructor(
    public logger: Logger,
    public scannerService: ScannerService,
  ) {

  }


  getDataType(data: string): Promise<IncomingDataType> {
    return new Promise((resolve, reject) => {
      this.logger.debug('Processing incoming data: ' + data);
       return resolve({type: 'bitcoinAddress', parsedData: data});
    });
  }

  showMenu (data: IncomingDataType) {
    this.actionSheetSubject.next({action: 'show', data: data});
  }

  menuHidden () {
    this.actionSheetSubject.next({action: 'hide'});
  }

  sanitizeUri(data) {
    // Fixes when a region uses comma to separate decimals
    let regex = /[\?\&]amount=(\d+([\,\.]\d+)?)/i;
    let match = regex.exec(data);
    if (!match || match.length === 0) {
      return data;
    }
    let value = match[0].replace(',', '.');
    let newUri = data.replace(regex, value);

    // mobile devices, uris like copay://glidera
    newUri.replace('://', ':');

    return newUri;
  }

  getParameterByName(name, url) {
    if (!url) return;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  checkPrivateKey(privateKey) {
    try {
      new this.bitcore.PrivateKey(privateKey, 'livenet');
    } catch (err) {
      return false;
    }
    return true;
  }

}
