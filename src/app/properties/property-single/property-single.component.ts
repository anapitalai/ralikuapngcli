/** import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-single',
  templateUrl: './property-single.component.html',
  styleUrls: ['./property-single.component.css']
})
export class PropertySingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}**/



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Http } from '@angular/http';
import { Property } from '../../shared/models/property';
import { PropertyService } from '../../shared/services/property.service';

@Component({
  styles:[

  ],
  templateUrl:'./property-single.component.html' 
})
export class PropertySingleComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router:Router,
              private service:PropertyService) {}
          

  teachers:Property;
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.service.getContact(_id)
    .subscribe(teachers=>this.teachers=teachers);
  }
    
  teacherDelete(){
    this.service.teacherDelete(this.teachers._id)
    .subscribe(data=>{
      this.router.navigate(['/properties']);
    })
  }

}
