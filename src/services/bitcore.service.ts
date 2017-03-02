import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';
// import { bitcore } from 'bitcore-lib';
// import * as Mnemonic from 'bitcore-mnemonic';

@Injectable()
export class BitcoreService {

  bitcore:any;
  Mnemonic:any;
  constructor(public logger: Logger) {
    // this.bitcore = bitcore;
    // this.Mnemonic = Mnemonic;
  }


}
