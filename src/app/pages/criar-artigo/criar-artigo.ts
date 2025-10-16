import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../shared/header/header';
import { FormsModule } from "@angular/forms";
import { Tag } from '../../interfaces/tag.interface';

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
  tagsArray: Tag[] = [];

  nomeTag: string = "";
  posicaoTag: string = "";
  conteudoTag: string = "";
  conteudoLink: string = "";
  conteudoImg: string = "";

  /*template*/
  mostrarTemplateCriarArtigo: boolean = true;

  constructor(){}

  mostrarCriarArtigo(){
    this.mostrarTemplateCriarArtigo = true;
  }

  mostrarPreVisualizacao(){
    this.mostrarTemplateCriarArtigo = false;
  }

  aplicarTagNoArray(){
    if(!this.posicaoTag || !this.nomeTag){
      //criar callback de erro
      return;
    }

    const novaTag: Tag = {
      nomeTag: this.nomeTag,
      posicaoTag: this.posicaoTag
    };

    this.tagsArray.push(novaTag);
    //this.tagsArray.set(2, 'p'); vai ser usado como um método para fazer a verificação chamando pelo ts a cada mudança de elemento
    
    this.nomeTag = "";
    this.posicaoTag = "";

    console.log(this.tagsArray);
  }
}