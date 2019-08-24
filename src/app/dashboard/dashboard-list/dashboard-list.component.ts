import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { DashboardService } from '../../shared/services/dashboard.service';
import { AuthSlyService } from 'src/app/shared/services/authsly.service';
@Component({
  styles:[`
   .user-card{cursor:pointer;
    align-items::center;
  }
  .user-card:hover{
    background:grey;
    border-radius:20px;
    
  }

  img{
    width:150px;
    height:150px;

  }
  `],
  templateUrl:'./dashboard-list.component.html' 
})
export class DashboardListComponent implements OnInit {
  users:User[];
  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(users=>this.users=users);
  }
    
  constructor(private service: DashboardService,public auth:AuthSlyService) {}

}
