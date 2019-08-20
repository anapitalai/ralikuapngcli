/** import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }
}**/

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Property } from '../models/property';
import { Observable,Subject } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

@Injectable()

export class PropertyService{
    private url:string='http://localhost:3007/teachers';
   
   // private url='http://chervicontraining.com:3000/teachers'; 
   //observable source
    private contactDeletedSource=new Subject();
    private contactCreatedSource=new Subject<Property>();
    
    private config = { headers: { 'Content-Type': 'multipart/form-data' } };

    //observable stream
    contactCreated$=this.contactCreatedSource.asObservable();
    contactDeleted$=this.contactDeletedSource.asObservable();
    
    constructor( private http: Http){}
    
 //all contacts
getContacts():Observable<Property[]>{
    return this.http.get(`${this.url}`)
    .pipe(map(res=>res.json().teachers),
     catchError(this.handleError));
}
private handleError(err){
    let errMessage:string;
    if(err instanceof Response){
        let body=err.json() || '';
        let error=body.error || JSON.stringify(body);
        errMessage=`${err.status}-${err.statusText || ''} ${error}`;
    }
    else{
        errMessage = err.message ? err.message: err.toString();
    }
 return Observable.throw(errMessage);
}
/** 
//get single contact
getContact(id):Observable<Property>{
 return this.http.get(`${this.url}/${id}`)
 .pipe(map(res=>res.json()))
 .catchError(this.handleError);
}

//update user details
updateContact(teacher:Property):Observable<Property>{
return this.http.put(`${this.url}/${teacher._id}`,teacher)
.map(teacher=>teacher.json())
.catchError(this.handleError)
}

createTeacher(teacher:Property):Observable<Property>{
    return this.http.post(this.url,teacher)
    .pipe(map(res=>res.json()))
    .tap(teacher=>this.teacherCreated(teacher))
    .catchError(this.handleError);
}

teacherDelete(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
    .do(res=>this.teacherDeleted())
    .catchError(this.handleError);
}

//messages
teacherCreated(teacher:Property){
    console.log('New Property has been created!');
    this.contactCreatedSource.next(teacher);
}

teacherDeleted(){
    this.contactDeletedSource.next();
    console.log('Property has been deleted!');
}
**/
}
