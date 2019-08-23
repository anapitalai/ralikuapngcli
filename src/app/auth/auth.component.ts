import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Property } from '../shared/models/property';
import { PropertyService } from '../shared/services/property.service';
import { AuthSlyService } from '../shared/services/authsly.service';
@Component({
  templateUrl:'./auth.component.html' 
})
export class AuthComponent implements OnInit {
  constructor(private authService:AuthSlyService,private router:Router ) {}

  credentials={email:'',password:''};
  errorMessage:string='';
  successMessage:string='';

  ngOnInit() {}

 

  login(){
    this.errorMessage='';
      this.authService.login(this.credentials.email,this.credentials.password)
      .subscribe(data=>{
        this.router.navigate(['/properties']);
        console.log(data);
      },
      err=>{
        this.errorMessage=err;
        console.error(err)
      }
    );
  }


}
