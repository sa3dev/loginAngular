import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpResponse } from '@angular/common/http';
import { User } from '../model/user-model';

import { Observable , of } from "rxjs";
import {  map ,delay , catchError , finalize , tap } from 'rxjs/operators';
 
import { Router } from '@angular/router';

const urlUser="http://127.0.0.1:3000/user";

/**
 * 
 */
@Injectable({
	providedIn: 'root'
})
export class UserService {

	private isIdentifier = false;

	constructor( 
		private httpClient: HttpClient ,  
		private router: Router ) { }

	getListUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>( urlUser ).pipe();
	}

	searchUser( firstname: string , lastname: string ){

		const service = this;

		const params = firstname ? { params: new HttpParams().set('first_name', firstname ).set('last_name' , lastname ) } : { } ;

		const obs = this.httpClient.get<User[]>( urlUser , params ).subscribe( (data) => {
			
			if( data.length === 1 ) 
			{
				console.log("ready");
				service.isIdentifier = true;
			}else{
				service.isIdentifier = false;
			}
			console.log(service.isIdentifier);
			service.router.navigate(['./listusers']);
		},
			error => console.log(error) // error path
		);
	}
	
	canActivate(): boolean{
		return this.isIdentifier;
	}

	//exemple de source dans un service pour ajouter ou modifier User
	putUser(user:User) {
	
		this.httpClient.put(urlUser,user).subscribe(
			data => {
				console.log("PUT Request is successful ", data);
			},
			error => {
				console.log("Rrror", error);
			}
		);
	}


	postUser(user:User) {
		
		this.httpClient.post(urlUser,user).subscribe(
			data => {
				console.log("POST Request is successful ", data);
			},
			error => {
				console.log("Rrror", error);
			}
		);
	}

	deleteUser (id: number) : void {
		const url = `${urlUser}/${id}`;
		this.httpClient.delete(url).subscribe( 
			error => {
			console.log("Error", error);
		}
		);
	}
}
