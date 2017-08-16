import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Site } from './site'
import { SiteService } from './site.service'



@Component({
  selector: 'my-site',
  templateUrl: './native-sites.component.html',
  styleUrls: [ './native-sites.component.css' ],

})

export class NativeSitesComponent  implements OnInit {
  sites: Site[];
  selectedSite: Site;

  constructor(
    private router: Router,
    private SiteService: SiteService) { }

  getSites(): void {
    this.SiteService.getSites().then(sites => this.sites = sites);
  }

  ngOnInit(): void {
    this.getSites();
  }

  onSelect(site: Site): void {
    this.selectedSite = site;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSite.id]);
  }
}


