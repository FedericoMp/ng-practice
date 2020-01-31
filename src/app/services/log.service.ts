import { Injectable } from '@angular/core';
import { AccountI } from '../models/acount.interface';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  logMsj(account: AccountI) {
      console.log(`Account added:
                  \n-name: ${account.name}
                  \n-status: ${account.status}`);
  }
}
