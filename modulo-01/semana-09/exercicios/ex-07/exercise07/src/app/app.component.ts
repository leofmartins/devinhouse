import { Component } from '@angular/core';
import { SaveService } from "./save.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private saveservice: SaveService) {

  }

  save(email: string, password: string) {
    this.saveservice.saveLogin({ email: email, password: password });
  }
}
