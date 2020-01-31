import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';
import { AccountI } from '../models/acount.interface';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  private accounts: AccountI[] = [];
  accountStatus = new EventEmitter<any>();

  constructor(private log: LogService) { }

  getAccounts(): AccountI[] {
    return this.accounts;
  }

  addAccount(account: AccountI) {
    this.accounts.push(account);
    this.log.logMsj(account);
  }

  updateStatus(id: number) {
    this.accounts[id].status = !this.accounts[id].status;
  }

  deleteAccount(id: number) {
    this.accounts.splice(id,1);
  }
}
