import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorCampo!: string;

  validar(value: string) {
    this.valorCampo = value;
  }
}
