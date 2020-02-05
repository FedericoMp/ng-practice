import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import { UserType } from '../models/userType.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private randNum: number;

  private userList: UserI[] = [
    { id: 1, name: `user_${this.getRandom()}`, userType: UserType.tpAdmin },
    { id: 2, name: `user_${this.getRandom()}`, userType: UserType.tpClient },
    { id: 3, name: `user_${this.getRandom()}`, userType: UserType.tpSupport },
    { id: 4, name: `user_${this.getRandom()}`, userType: UserType.tpSupport },
    { id: 5, name: `user_${this.getRandom()}`, userType: UserType.tpClient }
  ];

  getUsers(): UserI[] { return this.userList; }

  getRandom(): number {
    return this.randNum = Math.floor(Math.random() * 1000000);
  }
}
