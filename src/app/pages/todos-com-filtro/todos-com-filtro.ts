import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-todos-com-filtro',
  standalone: true, // Adicionei standalone se for Angular 14+
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Header
  ],
  templateUrl: './todos-com-filtro.html',
  styleUrl: './todos-com-filtro.scss'
})
export class TodosComFiltro implements OnInit {
  filtrosAtivos: string[] = []; 

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.atualizarFiltrosVindosDaUrl(params);
    });
  }

  private atualizarFiltrosVindosDaUrl(params: any): void {
    let tipos = params['t'];

    if (!tipos) {
      this.filtrosAtivos = [];
      return;
    }

    this.filtrosAtivos = Array.isArray(tipos) ? tipos : [tipos];
  }

  toggleFiltro(tipo: string): void {
    const index = this.filtrosAtivos.indexOf(tipo);

    if (index !== -1) {
      const novosFiltros = [...this.filtrosAtivos];
      novosFiltros.splice(index, 1);
      this.atualizarURL(novosFiltros);
    } else {
      const novosFiltros = [...this.filtrosAtivos, tipo];
      this.atualizarURL(novosFiltros);
    }
  }

  private atualizarURL(novosFiltros: string[]): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { 
        t: novosFiltros.length > 0 ? novosFiltros : null 
      },
      queryParamsHandling: 'merge', 
    });

  }

  estaAtivo(tipo: string): boolean {
    return this.filtrosAtivos.includes(tipo);
  }
}