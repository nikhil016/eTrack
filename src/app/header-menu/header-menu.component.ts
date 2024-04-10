import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent implements OnInit {
  isloggedin : boolean = true;
  constructor(private authService: DataService,private router: Router) {
  
  }

  PageTitle='';

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
         this.PageTitle='Order Center';
         this.isloggedin=false;
        } else if (event.url === '/dashboard') {
          this.PageTitle='Order Summary';
          this.isloggedin=true;
        }
      }
    });
}
Logout()
{
  this.router.navigate(['/login']);
}
}
