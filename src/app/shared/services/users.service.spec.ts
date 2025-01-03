import { TestBed } from '@angular/core/testing';

import { UserInterface } from '../types/user.interface';
import { UsersService } from './users.service';
import { UtilsService } from './utils.service';

describe('UsersService', () => {
  let usersService: UsersService;

  // Create a mock object for the UtilsService with Jest
  const utilsServiceMock = {
    // Mock the 'pluck' method using Jest's jest.fn()
    pluck: jest.fn(),
  };

  beforeEach(() => {
    // Configure the TestBed to provide the UsersService and replace UtilsService with the mock
    TestBed.configureTestingModule({
      providers: [
        UsersService, // Provide the actual UsersService
        { provide: UtilsService, useValue: utilsServiceMock }, // Replace UtilsService with the mock object
      ],
    });
    // Inject the UsersService instance
    usersService = TestBed.inject(UsersService);
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
      // Set up the initial state of users
      usersService.users = [{ id: '3', name: 'foo' }];
      // Mock the return value of the pluck method in the mock object
      utilsServiceMock.pluck.mockReturnValue(['foo']);
      // Call getUsernames and assert the expected result
      expect(usersService.getUsernames()).toEqual(['foo']);
    });
  });
});
