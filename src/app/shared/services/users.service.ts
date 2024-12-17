import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserInterface } from '../types/user.interface';
// import { UtilsService } from './utils.service';
@Injectable()
export class UsersService {
  // public utilsService = inject(UtilsService);
  // public users: UserInterface[] = [];

  users$ = new BehaviorSubject<UserInterface[]>([]);

  public addUser(user: UserInterface): void {
    // this.users = [...this.users, user];
    this.users$.next([...this.users$.getValue(), user]);
  }

  public removeUser(userId: string): void {
    // const updatedUsers = this.users.filter(user => userId !== user.id);
    // this.users = updatedUsers;
    const updatedUsers = this.users$
      .getValue()
      .filter(user => userId !== user.id);
    this.users$.next(updatedUsers);
  }

  // public getUsernames(): string[] {
  //   return this.utilsService.pluck(this.users, 'name');
  // }
}
