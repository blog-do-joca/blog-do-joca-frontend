import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  estaAbertoMenu: boolean = false;
  pesquisaItem: string = "";
  usuarioLogado: boolean = true;
  nomeUsuario: string = "Joalisson";

  constructor(
    private readonly router: Router
  ){}

  pesquisarPeloTipoOuPalavraChave(){
    this.router.navigate(['/todos-itens'], {
      queryParams: { p: this.pesquisaItem }
    });
  }

  redirecionarParaPesquisarTodos(tipoPesquisa: string){
    this.router.navigate(['/todos-itens'], {
      queryParams: { t: tipoPesquisa }
    });
  }

  transformarMenu(){
    const linha1 = document.getElementById('linha__1');
    const linha2 = document.getElementById('linha__2');
    const linha3 = document.getElementById('linha__3');

    this.estaAbertoMenu = !this.estaAbertoMenu;
    
    if(this.estaAbertoMenu){
      if(linha1 && linha2 && linha3){
        this.mudarParaFechado(linha1, linha2, linha3);
      }
    }else{
      if(linha1 && linha2 && linha3){
        this.mudarParaAberto(linha1, linha2, linha3);    
      }
    }
  }

  mudarParaAberto(linha1: HTMLElement, linha2: HTMLElement, linha3: HTMLElement){
    linha1.style.position = 'relative';
    linha1.style.rotate = '0deg';
    linha1.style.top = '0px';
    linha1.style.right = '0px';
    linha1.style.zIndex = '999';
    linha1.style.backgroundColor = '#fff';
    linha2.style.display = 'flex';
    linha2.style.backgroundColor = '#fff';
    linha2.style.zIndex = '999';
    linha3.style.rotate = '0deg';
    linha3.style.bottom = '0px';
    linha3.style.right = '0px';
    linha3.style.position = 'relative';
    linha3.style.top = '0px';
    linha3.style.right = '0px';
    linha3.style.zIndex = '999';
    linha3.style.backgroundColor = '#fff';
  }

  mudarParaFechado(linha1: HTMLElement, linha2: HTMLElement, linha3: HTMLElement){
    linha1.style.rotate = '45deg';
    linha1.style.position = 'fixed';
    linha1.style.top = '80px';
    linha1.style.right = '40px';
    linha1.style.zIndex = '999';
    linha1.style.transition = 'all 0.5s ease-in-out';
    linha1.style.backgroundColor = '#f8f8f8';
    linha2.style.display = 'none';
    linha2.style.backgroundColor = '#f8f8f8';
    linha2.style.zIndex = '999';
    linha2.style.transition = 'all 0.5s ease-in-out';
    linha3.style.rotate = '-45deg';
    linha3.style.position = 'fixed';
    linha3.style.top = '80px';
    linha3.style.right = '40px';
    linha3.style.backgroundColor = '#f8f8f8';
    linha3.style.zIndex = '999';
    linha3.style.transition = 'all 0.5s ease-in-out';
  }
}
