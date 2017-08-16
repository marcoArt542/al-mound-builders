import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Site } from './site';
import { SiteService  } from '../nativeSites/site.service';


@Component({
  selector: 'site-detail',
  templateUrl: './site-detail.component.html',
 
})
export class SiteDetailComponent implements OnInit {
    imageMargin: number = 20;   
    imageWidth: number = 80;
    @Input() site: Site;

    constructor(
    private siteService: SiteService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.siteService.getSite(+params.get('id')))
      .subscribe(site => this.site = site);
  }

  goBack(): void {
    this.location.back();
  }
    
}
