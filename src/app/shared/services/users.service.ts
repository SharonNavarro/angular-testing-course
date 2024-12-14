import { Injectable } from '@angular/core';

import { UserInterface } from '../types/user.interface';

@Injectable()
export class UsersService {
  public users: UserInterface[] = [];

  public addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  }

  public removeUser(userId: string): void {
    const updatedUsers = this.users.filter(user => userId !== user.id);
    this.users = updatedUsers;
  }
}
