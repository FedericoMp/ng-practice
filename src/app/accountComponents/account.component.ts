import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountI } from '../models/acount.interface';

@Component({
  selector: 'app-account-table',
  template: `
   <p class="subtitle">Accounts table:</p>
    <table class="table is-fullwidth is-striped is-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let account of accounts; index as id">
          <td>{{ id + 1 }}</td>
          <td>{{ account.name }}</td>
          <td>{{ account.status ? 'Online' : 'Offline' }}</td>
          <td>
            <button class="button"
            (click)="changeStatus(id)">Change Status</button>
            <button class="button"
            (click)="deleteAccount(id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  `
})

export class AccountComponent implements OnInit {

  accounts: AccountI[];

  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.getAccounts();
  }

  ngOnInit() { }

  changeStatus(id) {
    this.accountService.updateStatus(id);
    this.accountService
      .accountStatus.emit({
          name: this.accounts[id].name,
          status: this.accounts[id].status
      });
  }

  deleteAccount(id) {
    this.accountService.deleteAccount(id);
  }
}
