import { Component } from '@angular/core';
import { Model } from "../../model";

@Component({
  selector: 'app-notification-list',
  templateUrl: 'notification-list.component.html',
//   template: `<ul class="list-group">
//   <li class="list-group-item">
//     <h4>Lorem ipsum</h4>
//     <p>Excepteur sint occaecat cupidatat</p>
//     <p>
//       29 min ago
//     </p>
//   </li>
//
//   <li class="list-group-item">
//     <h4>Lorem ipsum</h4>
//     <p>Excepteur sint occaecat cupidatat</p>
//     <p>
//       1 day ago
//     </p>
//   </li>
//
//   <li class="list-group-item">
//     <h4>Lorem ipsum</h4>
//     <p>Excepteur sint occaecat cupidatat</p>
//     <p>
//       2 days ago
//     </p>
//   </li>
// </ul>`
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {

  lista = Model;

}
