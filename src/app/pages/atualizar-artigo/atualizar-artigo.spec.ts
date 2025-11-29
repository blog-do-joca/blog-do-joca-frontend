import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarArtigo } from './atualizar-artigo';

describe('AtualizarArtigo', () => {
  let component: AtualizarArtigo;
  let fixture: ComponentFixture<AtualizarArtigo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarArtigo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarArtigo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
