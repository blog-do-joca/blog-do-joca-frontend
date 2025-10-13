import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../shared/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-perfil',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Header
  ],
  templateUrl: './meu-perfil.html',
  styleUrl: './meu-perfil.scss'
})
export class MeuPerfil {
  novaImagemPerfil: string = "";
  imagemPerfil: string = "";
  localImagemPerfil: string = "";
  nomeCompleto: string = "";
  nomeUsuario: string = "";
  dataNascimento: string = "";
  emailUsuario: string = "";
  telefoneUsuario: string = "";
  senhaUsuario: string = "";

  constructor(){}

  validarCamposFormulario(){
    /**fazer validações para imagens */
    if(this.nomeCompleto.length > 4 || this.nomeCompleto.length < 30){
      //fazer callback
    }

    if(this.nomeUsuario.length > 4 || this.nomeUsuario.length < 30){
      //fazer callback
    }

    if(this.dataNascimento.length !== 10){
      //fazer callback
    }

    if(this.emailUsuario.length < 64){
      //fazer callback
    }

    if(this.telefoneUsuario.length !== 11){
      //fazer callback
    }

    if(this.senhaUsuario.length > 8 || this.senhaUsuario.length < 32){
      //fazer callback
    }
  }

  enviarAlteracoesPerfil(){
    this.validarCamposFormulario();

    //ligar ao servico
  }
}
