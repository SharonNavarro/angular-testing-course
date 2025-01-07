import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let utilsService: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService],
    });

    // Inyecta el servicio en las pruebas
    utilsService = TestBed.inject(UtilsService);
  });

  describe('range', () => {
    it('returns correct range from 1 to 5', () => {
      // Llama al método `range` del servicio
      expect(utilsService.range(1, 5)).toEqual([1, 2, 3, 4]);
    });

    it('returns correct range from 41 to 44', () => {
      // Llama al método `range` del servicio
      expect(utilsService.range(41, 44)).toEqual([41, 42, 43]);
    });
  });

  describe('pluck', () => {
    it('returns correct result', () => {
      const data = [
        { id: '1', name: 'foo' },
        { id: '2', name: 'bar' },
        { id: '3', name: 'baz' },
      ];

      // Llama al método `pluck` del servicio
      expect(utilsService.pluck(data, 'id')).toEqual(['1', '2', '3']);
    });
  });
});
