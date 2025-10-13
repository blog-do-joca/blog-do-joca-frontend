import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessao } from './iniciar-sessao';

describe('IniciarSessao', () => {
  let component: IniciarSessao;
  let fixture: ComponentFixture<IniciarSessao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarSessao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarSessao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
