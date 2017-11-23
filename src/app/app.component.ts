import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PORING SOFT .NET';
  widthTablet = 768;

  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenaviMode = 'over';
  sidenaviOpened = false;
  sidenaviIconVisible = true;

  naviLinkList = [
    { title: 'Top', icon: 'home', link: '/', },
    { title: 'About', icon: 'info', link: '/about', },
  ];

  otherLinkList = [
    { title: 'Twitter', icon: 'link', link: 'https://twitter.com/mry_p', },
    { title: 'GitHub', icon: 'link', link: 'https://github.com/mryp', },
  ];

  constructor(
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
        this.title = 'PORING SOFT .NET';
      } else {
        this.title = title;
      }
      this.router.navigate([link]);
    }
  }
}
