import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'mb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 3000, noPause: true}}]
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
