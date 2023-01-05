import { Component, Input } from '@angular/core';
import { personagem, Personagem } from "../personagem";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() personagem!: Personagem;
}
