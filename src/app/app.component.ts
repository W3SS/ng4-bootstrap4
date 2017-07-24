import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {

  currentUrl = '';
  currentPageUrl = '';

  constructor(private router: Router ) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAxKyZJ4bRnQ4LZD21ZRaZOLBUjBI5x6B0',
      authDomain: 'mb-angular-b4180.firebaseapp.com',
      databaseURL: 'https://mb-angular-b4180.firebaseio.com',
    })
  }

  ngDoCheck() {
    const currentUrl = this.router.url.slice(1).charAt(0).toUpperCase() + this.router.url.slice(2);
    this.currentPageUrl = this.router.url.slice(1).charAt(0) + this.router.url.slice(2);
    const currentUrlSlash = currentUrl.substring(0, currentUrl.indexOf('/'));
    if (currentUrlSlash) {
      this.currentUrl = currentUrlSlash;
    } else {
      this.currentUrl = currentUrl;
    }
  }

}
