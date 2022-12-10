import { Component } from '@angular/core';
import {Model} from "../../../model";

@Component({
  selector: 'app-nao-lidos',
  templateUrl: './nao-lidos.component.html',
  styleUrls: ['./nao-lidos.component.css']
})
export class NaoLidosComponent {
  listaNaoLidos = Model.filter(item => !item.lido)
}
