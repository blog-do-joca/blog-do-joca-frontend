import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarArtigo } from './criar-artigo';

describe('CriarArtigo', () => {
  let component: CriarArtigo;
  let fixture: ComponentFixture<CriarArtigo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarArtigo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarArtigo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
