import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NativeSitesComponent }from './nativeSites/native-sites.component';
import { SiteDetailComponent } from './nativeSites/site-detail.component';
import { TableListComponent } from './nativeSites/table-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'table-list',  component: TableListComponent },
  { path: 'detail/:id', component: SiteDetailComponent  },
  { path: 'sites', component: NativeSitesComponent },
  { path: 'about',component: AboutComponent },
  { path: 'contact',component: ContactComponent },
  { path: 'welcome',component: WelcomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
