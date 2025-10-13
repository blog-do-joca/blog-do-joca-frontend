import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComFiltro } from './todos-com-filtro';

describe('TodosComFiltro', () => {
  let component: TodosComFiltro;
  let fixture: ComponentFixture<TodosComFiltro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosComFiltro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosComFiltro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
