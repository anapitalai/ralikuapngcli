import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Property } from '../../shared/models/property';
import { PropertyService } from '../../shared/services/property.service';
import { AuthSlyService } from 'src/app/shared/services/authsly.service';

@Component({
  styleUrls: ['./property-single.component.css'],
  templateUrl:'./property-single.component.html' 
})
export class PropertySingleComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router:Router,
              private auth:AuthSlyService,
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
