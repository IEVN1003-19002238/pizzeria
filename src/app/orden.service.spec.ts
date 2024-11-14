import { TestBed } from '@angular/core/testing';

import { OrdenServicio } from './orden.service';

describe('OrdenService', () => {
  let service: OrdenServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
