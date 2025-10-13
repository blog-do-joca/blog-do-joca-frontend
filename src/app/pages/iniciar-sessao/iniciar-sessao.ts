import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-iniciar-sessao',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './iniciar-sessao.html',
  styleUrl: './iniciar-sessao.scss'
})
export class IniciarSessao {

}
