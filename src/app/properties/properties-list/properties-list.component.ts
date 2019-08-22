import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/services/property.service';
import { Property } from 'src/app/shared/models/property';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {
  
  constructor(private service: PropertyService,private auth:AuthService) {}

  teachers:Property[];
  ngOnInit(): void {
    this.service.getContacts()
    .subscribe(teachers=>this.teachers=teachers);
  }
    
  
}
