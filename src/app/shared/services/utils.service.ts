/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  public range = (start: number, end: number): number[] => {
    return [...Array(end - start).keys()].map(el => el + start);
  };

  public pluck = (elements: any[], field: string) => {
    return elements.map(el => el[field]);
  };
}
