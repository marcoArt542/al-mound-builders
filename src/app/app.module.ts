import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { StarComponent  } from '../shared/star.component';
import { NativeSitesComponent }from './nativeSites/native-sites.component';
import { SiteDetailComponent } from './nativeSites/site-detail.component';
import { TableListComponent } from './nativeSites/table-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {  AppMenuComponent } from './app-menu.component';

import { SiteService } from './nativeSites/site.service';
import { AppRoutingModule }   from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent, 
    StarComponent,/*visit-star*/
    NativeSitesComponent,/*HeroComponent*/
    SiteDetailComponent,/*HeroDetailComponent*/
    TableListComponent,/*Dashboard changed the name damn*/
    AboutComponent,
    ContactComponent,
    WelcomeComponent,
    AppMenuComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule   


  ],
  providers: [ SiteService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
