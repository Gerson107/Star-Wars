import { Component } from '@angular/core';
 

@Component({
  selector: 'app-header',
  template: 
  `<mat-toolbar class="header">
    <span>My App</span>
    <span class="spacer"></span>
  </mat-toolbar>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
}
