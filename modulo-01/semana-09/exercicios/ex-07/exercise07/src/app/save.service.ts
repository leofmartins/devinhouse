import { Injectable } from '@angular/core';
import { Login } from "../model";

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  dataset: string = "logins";
  dataEntries: Array<Login> = [];

  saveLogin(login: Login) {
    this.dataEntries.push(login);
    localStorage.setItem(this.dataset, JSON.stringify(this.dataEntries));
  }
}
