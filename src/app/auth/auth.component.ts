/** import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}**/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Property } from '../shared/models/property';
import { PropertyService } from '../shared/services/property.service';
import { AuthService } from '../shared/services/auth.service';
@Component({
  templateUrl:'./auth.component.html' 
})
export class AuthComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router ) {}

  credentials={email:'',password:''};
  errorMessage:string='';
  successMessage:string='';

  ngOnInit() {}

 

  login(){
    this.errorMessage='';
      this.authService.login(this.credentials.email,this.credentials.password)
      .subscribe(data=>{
        this.router.navigate(['/']);
        console.log(data);
      },
      err=>{
        this.errorMessage=err;
        console.error(err)
      }
    );
  }


}
