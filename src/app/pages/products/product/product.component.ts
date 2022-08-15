import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  template: `<mat-card class="card" >
  <mat-card-header>
      <mat-card-title> {{product.title}}</mat-card-title>
   
  </mat-card-header>
  <mat-card-content>
     Episode N.: {{product.episode_id}}
  </mat-card-content>
  <mat-card-content>
      Director:{{product.director}}
  </mat-card-content>
  <mat-card-actions>
   
<a routerLink="/characters-detail/:id" routerLinkActive="active" ariaCurrentWhenActive="page">
  <button mat-flat-button  (click)="onClick()">
      Personajes 
   </button>
  </a>
  </mat-card-actions>
</mat-card>
<app-characters-detail [character]='character' *ngFor="let character of characters"></app-characters-detail>
`,
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
@Input() product: any;
characters: any;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(): void {
     this.characters = this.product.characters;
  }

}
