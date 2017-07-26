import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: '<h1>{{title}}</h1>'
  // styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  title = "Tour of the heroes";
  constructor() { }

  ngOnInit() {
  }

}
