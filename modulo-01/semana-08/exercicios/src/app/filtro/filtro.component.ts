import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  botoesFiltro = [
    {
      nome: 'Todos',
      id: 'todos'
    },{
      nome: 'Lidos',
      id: 'lidos'
    },{
      nome: 'Não lidos',
      id: 'nao-lidos'
    }
  ]
}
