import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent {
@Input() image!:{src:string,alt:string}
@Input() title!:string;

}
