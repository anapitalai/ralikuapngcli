import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Stationery } from '../models/stationery';
import 'rxjs/add/operator/map';
import { Observable,Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import config from '../../../config/keys';

@Injectable()

export class StationeryService{
    //private url:string='http://localhost:3007/professionals';
    //private url='https://apis.raliku.com/professionals';
    private url=`${config.endPoint}/professionals`;
    //observable source
    private deletedProfessionalSource=new Subject();
    private createdProfessionalSource=new Subject<Stationery>();
    //observable stream
    createdProfessional$=this.createdProfessionalSource.asObservable();
    deletedProfessional$=this.deletedProfessionalSource.asObservable();
    
    constructor( private http: Http){}
    
 //all contacts
getProfessionals():Observable<Stationery[]>{
    return this.http.get(`${this.url}`)
    .pipe(map(res=>res.json().professionals),
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

//get single contact
getProfessional(id):Observable<Stationery>{
 return this.http.get(`${this.url}/${id}`)
 .pipe(map(res=>res.json()),
 catchError(this.handleError));
}

//update user details
updateProfessional(professional:Stationery):Observable<Stationery>{
return this.http.put(`${this.url}/${professional._id}`,professional)
.pipe(map(teacher=>teacher.json()),
catchError(this.handleError))
}


createProfessional(teacher:Stationery):Observable<Stationery>{
    return this.http.post(this.url,teacher)
    .pipe(map(res=>res.json()),
    tap(teacher=>this.createdProfessional(teacher)),
    catchError(this.handleError));
}


deleteProfessional(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
    .pipe(tap(res=>this.deletedProfessional()),
    catchError(this.handleError));
}

//messages
createdProfessional(teacher:Stationery){
    console.log('New Stationery has been created!');
    this.createdProfessionalSource.next(teacher);
}

deletedProfessional(){
    this.deletedProfessionalSource.next();
    console.log('Teacher has been deleted!');
}




}