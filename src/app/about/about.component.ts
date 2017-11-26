import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  contact: string;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    this.contact = config.contactTwitter;
   }

  ngOnInit() {
  }

  jumpWindow(url: string) {
    window.open(url);
  }
}
