import { Component, ViewChild, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { AppConfig, APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenaviMode = 'over';
  sidenaviOpened = false;
  sidenaviIconVisible = true;

  title = this.config.siteTitle;
  widthTablet = 768;

  naviLinkList = [
    { title: 'Top', icon: 'home', link: '/', },
    { title: 'About', icon: 'info', link: '/about', },
  ];

  otherLinkList = [
    { title: 'Twitter', icon: 'link', link: this.config.contactTwitter, },
    { title: 'GitHub', icon: 'link', link: this.config.contactGitHub, },
  ];

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private router: Router
  ) { }

  ngOnInit() {
    this.setSidenavi(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSidenavi(event.target.innerWidth);
  }

  setSidenavi(windowSize: number) {
    if (windowSize < this.widthTablet) {
      this.sidenaviMode = 'over';
      this.sidenaviOpened = false;
      this.sidenaviIconVisible = true;
    } else {
      this.sidenaviMode = 'side';
      this.sidenaviOpened = true;
      this.sidenaviIconVisible = false;
    }
  }

  jumpPage(title: string, link: string) {
    if (this.sidenaviIconVisible) {
      this.sidenav.close();
    }

    if (link.startsWith('http')) {
      window.open(link);
    } else {
      if (link === '/') {
        this.title = this.config.siteTitle;
      } else {
        this.title = title;
      }
      this.router.navigate([link]);
    }
  }
}
