import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicios';

  itemEscolhido = '';
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.itemEscolhido = this.route.snapshot.params['produto'];
  }
}
