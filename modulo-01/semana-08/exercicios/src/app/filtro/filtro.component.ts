import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  @Output() filtro = new EventEmitter<string>();

  obtemFiltro(value: string) {
    this.filtro.emit(value);
    console.log(value);
  }
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
