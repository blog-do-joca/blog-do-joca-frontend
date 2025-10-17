import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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

  @HostListener('window:scroll', [])
  verificarScroll(){
    const headerContainer = document.getElementById('header-container');

    const posicaoScroll = window.scrollY | document.documentElement.scrollTop;
    if(posicaoScroll > 40){
      if(headerContainer){
        headerContainer.style.width = '95%';
        headerContainer.style.left = '50%';
        headerContainer.style.transform = 'translateX(-50%)';
        headerContainer.style.borderBottomLeftRadius = '10px';
        headerContainer.style.borderBottomRightRadius = '10px';
      }
    } else{
      if(headerContainer){
        headerContainer.style.width = '100%';
        headerContainer.style.left = '0';
        headerContainer.style.transform = 'translateX(0)';
        headerContainer.style.borderBottomLeftRadius = '0px';
        headerContainer.style.borderBottomRightRadius = '0px';
      }
    }
  }

  redirecionarParaPesquisarTodos(tipoPesquisa: string){
    this.router.navigate(['/todos-itens'], {
      queryParams: { t: tipoPesquisa }
    });
  }
}
