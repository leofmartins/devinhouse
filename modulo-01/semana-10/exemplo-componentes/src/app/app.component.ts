import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exemplo-componentes';

  botaoFilhoPrimario(nome: string) {
    console.log(`${nome} inserido com sucesso.`);
  }

  botaoFilhoSecunadrio(nome: string) {
    console.log(`${nome} deletado com sucesso!`);
  }
}
