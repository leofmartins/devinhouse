import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.css']
})
export class ButtonActionComponent {
  // tituloBotaoSalvar: string = "Savar";
  // tituloBotaoCancelar: string = "Cancelar";

  @Input() tituloBotaoPrimario: string = "Salvar";
  @Input() tituloBotaoSecundario: string = "Cancelar";

  @Output() botaoPrimarioClicado = new EventEmitter();
  @Output() botaoSecundarioClicado = new EventEmitter();
  dispararPrimario() {
    console.log("Clicou botão 1");
    this.botaoPrimarioClicado.emit("Leonardo");
  };
  dispararScundario() {
    console.log("Clicou botão 2");
    this.botaoSecundarioClicado.emit("Leonardo");
  };
}
