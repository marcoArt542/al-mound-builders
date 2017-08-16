import { Injectable } from '@angular/core';

import { Site } from './site';
import { SITES } from './mock-sites';

@Injectable()
export class SiteService {
     getSites(): Promise<Site[]> {
         return Promise.resolve(SITES);
     }
 
getSite(id: number): Promise<Site> {
    return this.getSites()
               .then(sites => sites.find(site => site.id === id));
  }     
}
