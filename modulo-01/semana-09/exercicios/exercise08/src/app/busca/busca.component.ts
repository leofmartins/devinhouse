import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {
  @Input() busca!: string;

  @Output() termoBuscado = new EventEmitter<string>();

  returnToParent(value: string) {
    this.termoBuscado.emit(value);
  }

}
