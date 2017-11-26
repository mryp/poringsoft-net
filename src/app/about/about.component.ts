import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  ngOnInit() {
  }

  jumpUrl(url: string) {
    window.open(url);
  }
}
