import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserInterface } from '../types/user.interface';
import { UtilsService } from '../utils/utils.service';

@Injectable()
export class UsersService {
  // Inject the UtilsService using Angular's inject function
  public utilsService = inject(UtilsService);

  // BehaviorSubject to manage the state of users
  // It starts with an empty array and allows emitting and observing new values
  public users$ = new BehaviorSubject<UserInterface[]>([]);

  // Method to add a user to the stream
  public addUser(user: UserInterface): void {
    // Update the stream with the current users array plus the new user
    this.users$.next([...this.users$.getValue(), user]);
  }

  // Method to remove a user from the stream based on user ID
  public removeUser(userId: string): void {
    // Filter the current users array to exclude the user with the specified ID
    const updatedUsers = this.users$
      .getValue()
      .filter(user => userId !== user.id);
    // Emit the updated array
    this.users$.next(updatedUsers);
  }

  // Method to get usernames using the pluck method from UtilsService
  public getUsernames(): string[] {
    // Use the current value of the stream to extract the usernames
    return this.utilsService.pluck(this.users$.getValue(), 'name');
  }
}
