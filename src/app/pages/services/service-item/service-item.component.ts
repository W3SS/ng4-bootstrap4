import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../services.model';

@Component({
  selector: 'mb-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input() service: Services;

  constructor() { }

  ngOnInit() {
  }

}
