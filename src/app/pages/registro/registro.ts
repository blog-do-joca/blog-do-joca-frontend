import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.scss'
})
export class Registro {

}
