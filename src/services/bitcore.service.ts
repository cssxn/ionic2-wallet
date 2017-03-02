import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import Mnemonic from 'bitcore-mnemonic';
import bitcore from 'bitcore-lib';

@Injectable()
export class BitcoreService {

  constructor(public logger: Logger) {
    logger.debug('bitcoreService providing ...');

  }

  get menmonic(){
    return new Mnemonic();
  }




}
