import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  //templateUrl: './aboutus.component.html',
  template:`
  <h2>About us is designed in the template of the Component decorator</h2>
  `,
  //styleUrl: './aboutus.component.css'
  styles: [
    `
    h2{
      color: green;
    }
    `
  ]
})
export class AboutusComponent {

}
