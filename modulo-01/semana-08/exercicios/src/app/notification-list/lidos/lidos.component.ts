import { Component } from '@angular/core';
import {Model} from "../../../model";

@Component({
  selector: 'app-lidos',
  templateUrl: './lidos.component.html',
  styleUrls: ['./lidos.component.css']
})
export class LidosComponent {
  listLidos = Model.filter(item => item.lido);
}
