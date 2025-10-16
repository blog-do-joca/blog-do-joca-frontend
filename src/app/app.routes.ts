import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { IniciarSessao } from './pages/iniciar-sessao/iniciar-sessao';
import { Registro } from './pages/registro/registro';
import { TodosComFiltro } from './pages/todos-com-filtro/todos-com-filtro';
import { Favoritos } from './pages/favoritos/favoritos';
import { MeuPerfil } from './pages/meu-perfil/meu-perfil';
import { CriarArtigo } from './pages/criar-artigo/criar-artigo';
import { Artigo } from './pages/artigo/artigo';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home //dá para por o uuid do user
    }, 
    {
        path: 'iniciar-sessao',
        component: IniciarSessao
    },
    {
        path: 'cadastro',
        component: Registro
    },
    {
        path: 'todos-itens',
        component: TodosComFiltro //dá para por o uuid do user
    },
    {
        path: 'favoritos',
        component: Favoritos //dá para por o uuid do user
    },
    {
        path: 'meu-perfil',
        component: MeuPerfil //dá para por o uuid do user
    },
    {
        path: 'criar-artigo',
        component: CriarArtigo
    },
    {
        path: 'artigo/:id',
        component: Artigo
    },
    {
        path: '**',
        component: Home
    },
];
