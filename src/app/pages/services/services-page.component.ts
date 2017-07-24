import { Component, OnInit } from '@angular/core';

import { Services } from './services.model';
import { ServicesService } from './services.service';

@Component({
  selector: 'mb-services',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  services: Services[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.services = this.servicesService.getServices();
  }

}
