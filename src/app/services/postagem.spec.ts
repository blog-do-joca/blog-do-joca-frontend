import { TestBed } from '@angular/core/testing';

import { Postagem } from './postagem';

describe('Postagem', () => {
  let service: Postagem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Postagem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
