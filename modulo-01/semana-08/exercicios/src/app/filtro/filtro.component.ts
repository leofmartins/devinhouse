import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

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
      nomeFiltro: 'Todos',
      idFiltro: 'todos'
    },{
      nomeFiltro: 'Lidos',
      idFiltro: 'lidos'
    },{
      nomeFiltro: 'Não lidos',
      idFiltro: 'nao-lidos'
    }
  ]
}
