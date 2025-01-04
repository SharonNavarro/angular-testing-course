import { TestBed } from '@angular/core/testing';

import { UserInterface } from '../types/user.interface';
import { UsersService } from './users.service';
import { UtilsService } from './utils.service';

describe('UsersService', () => {
  let usersService: UsersService;
  let utilsService: UtilsService;

  beforeEach(() => {
    // Configure the TestBed to provide UsersService and UtilsService
    TestBed.configureTestingModule({
      providers: [UsersService, UtilsService],
    });
    // Inject instances of UsersService and UtilsService
    usersService = TestBed.inject(UsersService);
    utilsService = TestBed.inject(UtilsService);
  });

  // Test to verify if UsersService is created successfully
  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    // Test the addUser method
    it('should add a user', () => {
      const user: UserInterface = {
        id: '3',
        name: 'foo',
      };
      // Call the addUser method
      usersService.addUser(user);
      // Assert that the user was added to the users array
      expect(usersService.users).toEqual([
        {
          id: '3',
          name: 'foo',
        },
      ]);
    });
  });

  describe('removeUser', () => {
    // Test the removeUser method
    it('should remove a user', () => {
      // Set up the initial state of users
      usersService.users = [{ id: '3', name: 'foo' }];
      // Call the removeUser method
      usersService.removeUser('3');
      // Assert that the user was removed from the users array
      expect(usersService.users).toEqual([]);
    });
  });

  describe('getUsernames', () => {
    // Test the getUsernames method
    it('should get user names', () => {
      // Use jest.spyOn to create a spy on the pluck method of UtilsService
      jest.spyOn(utilsService, 'pluck');

      // Set up the initial state of users
      usersService.users = [{ id: '3', name: 'foo' }];

      // Call the getUsernames method
      usersService.getUsernames();

      // Verify that the pluck method was called with the correct arguments
      expect(utilsService.pluck).toHaveBeenCalledWith(
        usersService.users, // The array of users
        'name' // The property to pluck from each user
      );
    });
  });
});
