import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TagInterface } from '../types/tag.interface';
import { ApiService } from './api.service';

describe('ApiService', () => {
  // Declare variables to hold the service and the HTTP testing controller
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  // Base URL for the API service
  const urlService = 'http://localhost:3004';

  beforeEach(() => {
    // Configure the TestBed with necessary modules and providers
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import the HttpClientTestingModule to mock HTTP requests
      providers: [ApiService], // Provide the ApiService for testing
    });

    // Inject the service and testing controller for use in tests
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Ensure that there are no outstanding HTTP requests after each test
    httpTestingController.verify();
  });

  // Test to verify that the ApiService is created successfully
  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  describe('getTags', () => {
    // Test the getTags method of the ApiService
    it('should return a list of tags', () => {
      let tags: TagInterface[] | undefined;

      // Call the getTags method, which performs an HTTP GET request
      apiService.getTags().subscribe(res => (tags = res));

      // Expect a single HTTP request to the specified endpoint
      const req = httpTestingController.expectOne(urlService + '/tags');

      // Simulate a successful HTTP response with mock data
      req.flush([{ id: '1', name: 'foo' }]);

      // Assert that the response matches the expected data
      expect(tags).toEqual([{ id: '1', name: 'foo' }]);
    });
  });

  describe('createTag', () => {
    // Test the createTag method of the ApiService
    it('should create a tag', () => {
      let tag: TagInterface | undefined;

      // Call the createTag method, which performs an HTTP POST request
      apiService.createTag('foo').subscribe(res => {
        tag = res; // Capture the response
      });

      // Expect a single HTTP request to the specified endpoint
      const req = httpTestingController.expectOne(urlService + '/tags');

      // Simulate a successful HTTP response with mock data
      req.flush({ id: '1', name: 'foo' });

      // Assert that the response matches the expected data
      expect(tag).toEqual({ id: '1', name: 'foo' });

      // Assert that the request method is POST
      expect(req.request.method).toEqual('POST');

      // Assert that the request body matches the expected payload
      expect(req.request.body).toEqual({ name: 'foo' });
    });
  });
});
