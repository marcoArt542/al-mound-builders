import { Component, OnInit  } from '@angular/core';

import { Site } from './site';
import { SiteService  } from './site.service';

@Component({
  selector: 'my-site-listings',
  templateUrl: './table-list.component.html'
})

export class TableListComponent implements OnInit {
      imageWidth: number = 35;
      imageMargin: number = 0;
      imagePadding: number = 2;

      sites: Site[] = [];

  constructor(private siteService: SiteService) { }

  ngOnInit(): void {
    this.siteService.getSites()
      .then(sites => this.sites = sites);
  }

 }