import { inject, Injectable } from '@angular/core';

import { UserInterface } from '../types/user.interface';
import { UtilsService } from './utils.service';

@Injectable()
export class UsersService {
  public utilsService = inject(UtilsService);
  public users: UserInterface[] = [];

  public addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  }

  public removeUser(userId: string): void {
    const updatedUsers = this.users.filter(user => userId !== user.id);
    this.users = updatedUsers;
  }

  public getUsernames(): string[] {
    return this.utilsService.pluck(this.users, 'name');
  }
}
