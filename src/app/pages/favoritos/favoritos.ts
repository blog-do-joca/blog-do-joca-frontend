import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-favoritos',
  imports: [
    CommonModule,
    RouterModule,
    Header
  ],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.scss'
})
export class Favoritos {

}
