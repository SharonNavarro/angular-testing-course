import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { UserInterface } from '../types/user.interface';
import { UsersService } from './users.service';
import { UtilsService } from './utils.service';

describe('UsersService', () => {
  let usersService: UsersService;
  let utilsService: UtilsService;

  beforeEach(() => {
    // Configure TestBed with necessary providers and mock
    TestBed.configureTestingModule({
      providers: [UsersService, UtilsService],
    });

    usersService = TestBed.inject(UsersService);
    utilsService = TestBed.inject(UtilsService);
  });

  // Test to verify that the UsersService is created successfully
  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('users$ BehaviorSubject', () => {
    it('should start with an empty array', async () => {
      // Use RxJS's `firstValueFrom` to get the first emitted value from the BehaviorSubject
      const users = await firstValueFrom(usersService.users$);

      // Assert that the initial value is an empty array
      expect(users).toEqual([]);
    });
  });

  describe('addUser', () => {
    // Test the addUser method
    it('should add a user', () => {
      const user: UserInterface = {
        id: '3',
        name: 'foo',
      };

      // Call the addUser method to add the new user
      usersService.addUser(user);

      // Use BehaviorSubject's getValue method to verify the state of users$
      expect(usersService.users$.getValue()).toEqual([
        {
          id: '3',
          name: 'foo',
        },
      ]);
    });

    it('should emit updated user list when a user is added', async () => {
      const user: UserInterface = { id: '1', name: 'John' };

      // Add a user to trigger the update
      usersService.addUser(user);

      // Use RxJS's `firstValueFrom` to get the first emitted value from the BehaviorSubject
      const users = await firstValueFrom(usersService.users$);

      // Expect the emitted value to include the added user
      expect(users).toEqual([{ id: '1', name: 'John' }]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      // Set the initial state of users$ to include one user
      usersService.users$.next([{ id: '3', name: 'foo' }]);

      // Call the removeUser method with the user's ID
      usersService.removeUser('3');

      // Verify that the user has been removed from users$
      expect(usersService.users$.getValue()).toEqual([]);
    });

    it('should emit updated user list when a user is removed', async () => {
      const initialUsers: UserInterface[] = [
        { id: '1', name: 'John' },
        { id: '2', name: 'Jane' },
      ];

      // Set the initial value for the BehaviorSubject
      usersService.users$.next(initialUsers);

      // Remove a user to trigger the update
      usersService.removeUser('1');

      // Use RxJS's `firstValueFrom` to get the first emitted value from the BehaviorSubject
      const users = await firstValueFrom(usersService.users$);

      // Expect the emitted value to exclude the removed user
      expect(users).toEqual([{ id: '2', name: 'Jane' }]);
    });
  });

  describe('getUsernames', () => {
    it('should get usernames', () => {
      // Spy on the pluck method of utilsService to monitor its behavior
      const pluckSpy = jest.spyOn(utilsService, 'pluck');

      // Set the initial value for the users$ BehaviorSubject
      usersService.users$.next([{ id: '3', name: 'foo' }]);

      // Mocking pluck method return value
      pluckSpy.mockReturnValue(['foo']);

      // Call the getUsernames method, which internally uses the pluck method
      const usernames = usersService.getUsernames();

      // Verify that the pluck method was called with the correct arguments:
      // 1. The current value of users$ (array of users)
      // 2. The property name to extract ('name')
      expect(pluckSpy).toHaveBeenCalledWith(
        usersService.users$.getValue(),
        'name'
      );

      // Verify the output of getUsernames matches the mocked result
      expect(usernames).toEqual(['foo']);
    });
  });
});
