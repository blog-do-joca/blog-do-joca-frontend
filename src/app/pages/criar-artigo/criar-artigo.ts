import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../shared/header/header';
import { FormsModule } from "@angular/forms";
import { BlocoArtigo } from '../../interfaces/bloco-artigo.interface';
import { Artigos } from '../../services/artigos';

@Component({
  selector: 'app-criar-artigo',
  imports: [
    CommonModule,
    RouterModule,
    Header,
    FormsModule
],
  templateUrl: './criar-artigo.html',
  styleUrl: './criar-artigo.scss'
})
export class CriarArtigo {
  articlesBlocks: BlocoArtigo[] = [];
  artigosEmOrdem: BlocoArtigo[] = [];

  nomeBlocoArtigo: string = "";
  ordem: number = 0;
  conteudoBlocoArtigo: string = "";
  conteudoLink: string = "";
  conteudoImg: string = "";

  /*template*/
  mostrarTemplateCriarArtigo: boolean = true;

  constructor(
    private readonly artigoService: Artigos
  ){}

  mostrarCriarArtigo(){
    this.mostrarTemplateCriarArtigo = true;
  }

  mostrarPreVisualizacao(){
    this.mostrarTemplateCriarArtigo = false;
  }

  criarArtigo(){
    this.tratamentoDeErros();

    this.artigoService.criarArtigo(this.artigosEmOrdem).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }

  aplicarBlocoArtigoNoArray(){
    this.tratamentoDeErros();

    const novoElemento = this.criarObjetoParaNovoElemento();

    this.verificarSeElementoExisteNaPosicao(novoElemento.ordem, novoElemento);
    
    this.limparCamposForms();
    
    this.colocarArtigosEmOrdemParaPreVisualizacao();
  }

  verificarSeElementoExisteNaPosicao(ordemElementoAtual: number, novoElemento: BlocoArtigo){
    ordemElementoAtual = this.ordem;

    const ordemJaExiste = this.articlesBlocks.some(
      (bloco) => bloco.ordem == ordemElementoAtual
    );

    if(ordemJaExiste){
      /**
       * rebaixa a ordem atual como se ela fosse 'n' seria n + 1
       * e coloca o elemento atual nessa ordem
       */
      this.articlesBlocks.forEach((bloco) => {
        const ordemAtual = bloco.ordem;

        if (ordemAtual >= ordemElementoAtual) { 
          bloco.ordem = (ordemAtual + 1);
        }
      });

      this.inserirNovoElementoNoArray(novoElemento);
    }else{
      this.inserirNovoElementoNoArray(novoElemento);
    }

    this.colocarArtigosEmOrdemParaPreVisualizacao();
  }

  inserirNovoElementoNoArray(novoElemento: BlocoArtigo){
    this.articlesBlocks.push(novoElemento);
  }

  tratamentoDeErros(){
    if(!this.ordem || !this.nomeBlocoArtigo || this.conteudoBlocoArtigo === ""){
      //criar callback de erro
      return;
    }
  }

  criarObjetoParaNovoElemento(){
    const novaBlocoArtigo: BlocoArtigo = {
      nomeBlocoArtigo: this.nomeBlocoArtigo,
      conteudoBlocoArtigo: this.conteudoBlocoArtigo,
      conteudoLink: this.conteudoLink,
      conteudoImg: this.conteudoImg,
      ordem: this.ordem
    };

    return novaBlocoArtigo;
  }

  limparCamposForms(){
    this.nomeBlocoArtigo = "";
    this.conteudoBlocoArtigo = "";
    this.conteudoImg = "";
    this.conteudoLink = "";
  }

  colocarArtigosEmOrdemParaPreVisualizacao(){
    // Cria uma CÓPIA INDEPENDENTE (deep copy, ou shallow copy se os objetos são simples)
    // Usando .map para garantir que o array seja clonado e o sort não mute o articlesBlocks
    this.artigosEmOrdem = this.articlesBlocks.map(a => ({...a})); 

    this.artigosEmOrdem.sort((a, b) => {
      const ordemA = a.ordem;
      const ordemB = b.ordem;

      return ordemA - ordemB;
    });
  }


}