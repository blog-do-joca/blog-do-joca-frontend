import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    Header
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home{

  constructor(
    private readonly router: Router
  ){}

  redirecionarParaPesquisarTodos(tipoPesquisa: string){
    this.router.navigate(['/todos-itens'], {
      queryParams: { t: tipoPesquisa }
    });
  }
}
