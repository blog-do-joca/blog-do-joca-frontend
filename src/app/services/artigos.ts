import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artigo } from '../pages/artigo/artigo';

@Injectable({
  providedIn: 'root'
})
export class Artigos {
  //ver com nginx e proxy reverso para mudar
  private apiUrlLocal = 'http://localhost:8080/api/artigo/';

  constructor(private http: HttpClient) {}

  criarArtigo(artigo: Artigo){
    return this.http.post<Artigo>(this.apiUrlLocal + "criar", artigo);  
  }

  buscarTodosArtigos(){

  }

  buscarArtigoEspecifico(){

  }

  atualizarArtigo(){

  }

  deletarArtigo(){

  }
}
