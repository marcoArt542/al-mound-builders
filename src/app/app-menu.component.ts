import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  template: ` 
     <nav class="navbar navbar-inverse">
      <div class="container">
            <div class="navbar-header">
               <a routerLink="/welcome"  class="navbar-brand">Alabama Mound Builders</a>
             </div><!--navbar-header-->
            <ul class="nav navbar-nav">
                  <li>
                    <a routerLink="/welcome" routerLinkActive="active"  class="active">Welcome</a>
                 </li>
                  <li>
                    <a routerLink="/about" >About</a>
                  </li>
                  <li>
                     <a href="#" data-target="#" data-toggle="dropdown">Native American Sites <span class="caret"></span></a>

            	         <ul class="dropdown-menu">
                            <li><a routerLink="/table-list">List of Sites</a></li> 
                             <li class="divider"></li>               
                            <li><a routerLink="sites">Listed by County</a></li>
          
                      </ul>
                  </li>          
                
                <li>
                  <a routerLink="/contact">Contact</a>
                </li>
          </ul>
     
      </div>
          
    </nav>
    

  <router-outlet></router-outlet>` 
})

export class AppMenuComponent {
 
}
