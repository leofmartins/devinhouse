import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Lista de Tarefas!
      </h1>
    </div>
    <label for="campoTarefa"></label>
    <input type="text" name="tarefa" id="campoTarefa" #campoTarefa>
    <button type="button"
            (click)="adicionaTarefa(campoTarefa.value)">
        Salvar</button>
    <p *ngIf="listaDeTarefas.length === 0">Lista vazia</p>
    <ul *ngFor="let tarefa of listaDeTarefas">
        <li>
            <p>{{ tarefa }}</p>
        </li>
    </ul>
  `,
  styles: []
})

export class AppComponent {

  listaDeTarefas: string[] = [];

  adicionaTarefa(tarefa: string) {
    this.listaDeTarefas.push(tarefa);
  }
}
