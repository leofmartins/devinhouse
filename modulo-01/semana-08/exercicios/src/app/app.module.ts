import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from "@angular/forms";
import { FiltroComponent } from './filtro/filtro.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RouterModule, Routes } from "@angular/router";
import * as path from "path";
import { LidosComponent } from './notification-list/lidos/lidos.component';
import { NaoLidosComponent } from './notification-list/nao-lidos/nao-lidos.component';

const childRoutes: Routes = [
  {
    path: 'todos',
    component: NotificationListComponent
  },  {
    path: 'lidos',
    component: LidosComponent
  },  {
    path: 'nao-lidos',
    component: NaoLidosComponent
  }
]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: NotificationListComponent,
    children: childRoutes
  },{
    path: 'sobre',
    component: SobreComponent
  },{
    path: 'lidos',
    component: LidosComponent
  },{
    path: 'nao-lidos',
    component: NaoLidosComponent
  },{
    path: 'todos',
    component: NotificationListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    HeaderComponent,
    FooterComponent,
    FiltroComponent,
    HomeComponent,
    SobreComponent,
    LidosComponent,
    NaoLidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
