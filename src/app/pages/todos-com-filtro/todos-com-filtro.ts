import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-todos-com-filtro',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Header
  ],
  templateUrl: './todos-com-filtro.html',
  styleUrl: './todos-com-filtro.scss'
})
export class TodosComFiltro {

}
