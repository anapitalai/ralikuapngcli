import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/services/property.service';
import { Property } from 'src/app/shared/models/property';
import { AuthSlyService } from 'src/app/shared/services/authsly.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {
  
  constructor(private service: PropertyService,private auth:AuthSlyService) {}

  teachers:Property[];
  ngOnInit(): void {
    this.service.getContacts()
    .subscribe(teachers=>this.teachers=teachers);
  }
    
  
}
