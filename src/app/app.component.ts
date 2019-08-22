/** import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ralikuapp';
}**/


import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Property } from './shared/models/property';
import { User } from './shared/models/user';
import { PropertyService } from './shared/services/property.service';
import { AuthService } from './shared/services/auth.service';
import { DashboardService } from './shared/services/dashboard.service';
@Component({
  selector: 'app-root',
  styles: [],
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {


  teachers: Property[];
  users: User[];

  constructor(private service: PropertyService, private authService: AuthService, private dashboardService: DashboardService
    , private router: Router) { }

  ngOnInit(): void {
    this.service.getContacts()
      .subscribe(teachers => this.teachers = teachers,

      );
  }

 profile(){
   console.log(this.dashboardService.getUsers());
   
 }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
