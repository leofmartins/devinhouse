import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayFotos: any = [
    {
      url: "https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:"Lava de vulção fotografada por cima"
    },
    {
      url: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
      description:"Paisagem com uma montanha ao fundo e o mar"
    },
    {
      url: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:"Linda floresta verede com arvores altas"
    },
    {
      url: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:"Skyline de uma cidade iluminada"
    },
    {
      url: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:"Bela galáxia em espiral"
    }
  ]
}
