import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-detail',
  template: `<p>{{character}}</p>`,
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {
@Input() character: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.character)
  }

}
