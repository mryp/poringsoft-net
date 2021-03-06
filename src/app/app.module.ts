import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule,
   MatSidenavModule,
   MatCardModule,
   MatIconModule,
   MatListModule,
   MatButtonModule
  } from '@angular/material';


import { AppConfig, APP_CONFIG, APP_DI_CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { AboutComponent } from './about/about.component';

const appRoutes = [
  { path: '', component: TopComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
