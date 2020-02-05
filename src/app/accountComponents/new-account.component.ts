import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountI } from '../models/acount.interface';

@Component({
  selector: 'app-new-account',
  template: `
  <div class="container">
    <p class="subtitle">Services practice:</p>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Account Name"
        (input)="setAccountName($event)">
    </div><br>
    <div class="control">
      <div class="select is-fullwidth">
          <select (input)="setAccountState($event)">
            <option>Select one...</option>
            <option>Offline</option>
            <option>Online</option>
          </select>
      </div>
    </div><br>
    <div class="control">
      <button
        class="button is-primary"
        (click)="createAccount()">Create Account</button>
    </div>
  </div><br>
  <div *ngIf="accounts.length <= 0; else accountTable">
    <p>There aren't accounts yet...</p>
  </div>
  <ng-template #accountTable>
    <app-account-table></app-account-table>
  </ng-template>
  `
})

export class NewAccountComponent implements OnInit {

  accounts: AccountI[];
  accountsLength: number;
  inputName: string;
  inputState: boolean;

  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.getAccounts();
    this.accountService.accountStatus.subscribe(
      (acc: any) => {
        alert(`Status for: ${acc.name}, updated from: ${!acc.status ? 'Online' : 'Offline' } to: ${acc.status ? 'Online' : 'Offline' }`);
      });
  }

  ngOnInit() {
    this.accountsLength = this.accounts.length;
  }

  setAccountName(event: any) {
    this.inputName = event.target.value;
  }

  setAccountState(event: any) {
    const choice = event.target.value;
    if (choice === 'Online') {
      this.inputState = true;
    }
    if (choice === 'Offline') {
      this.inputState = false;
    }
  }

  createAccount() {
    const newAccount: AccountI = {
      name: this.inputName,
      status: this.inputState
    };
    this.accountService.addAccount(newAccount);
  }

}
