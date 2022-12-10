import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  @Output() variavelOutput = new EventEmitter<string>();

  metodoCapturaEventoClick(value: string) {
    this.variavelOutput.emit(value);
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
