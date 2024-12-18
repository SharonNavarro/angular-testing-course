import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TagInterface } from '../types/tag.interface';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;
  const urlService = 'http://localhost:3004';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  describe('getTags', () => {
    it('should return a list of tags', () => {
      let tags: TagInterface[] | undefined;
      apiService.getTags().subscribe(res => (tags = res));
      const req = httpTestingController.expectOne(urlService + '/tags');
      req.flush([{ id: '1', name: 'foo' }]);
      expect(tags).toEqual([{ id: '1', name: 'foo' }]);
    });
  });

  describe('createTag', () => {
    it('should create a tag', () => {
      let tag: TagInterface | undefined;
      apiService.createTag('foo').subscribe(res => {
        tag = res;
      });
      const req = httpTestingController.expectOne(urlService + '/tags');
      req.flush({ id: '1', name: 'foo' });
      expect(tag).toEqual({ id: '1', name: 'foo' });
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual({ name: 'foo' });
    });

    it('throws an error if request fails', () => {
      let actualError: HttpErrorResponse | undefined;
      apiService.createTag('foo').subscribe({
        next: () => {
          fail('Success should not be called');
        },
        error: err => {
          actualError = err;
        },
      });
      const req = httpTestingController.expectOne(urlService + '/tags');
      req.flush('Server Error', {
        status: 422,
        statusText: 'Unprocessible entity',
      });

      if (!actualError) {
        throw new Error('Error needs to be undefined');
      }

      expect(actualError.status).toEqual(422);
      expect(actualError.statusText).toEqual('Unprocessible entity');
    });
  });
});
