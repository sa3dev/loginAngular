import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user-model';
import { HttpParams, HttpClient } from '@angular/common/http';


const urlUser="http://127.0.0.1:3000/user";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	// private loginForm : FormGroup;
	// private firstnameForm: FormControl;
	// private lastnameForm: FormControl;
	// private isIdentifier = false ;

	private username ;
	private lastname ;
	private idmodif;
	private idsupp;

	constructor( 
		// private fb: FormBuilder,
		private userService: UserService,
		private router : Router,
		private httpClient : HttpClient
	  ) { }

	ngOnInit() {
		// this.firstnameForm = this.fb.control('', Validators.required);
		// this.lastnameForm =  this.fb.control('', Validators.required);
		
		// this.loginForm = this.fb.group({
		// 	username: this.firstnameForm ,
		// 	lastname: this.lastnameForm
		// })
	}

	login(){
		this.userService.searchUser(this.username , this.lastname  );
	}

	post(){
		const user = new User(); //creer un nouvel utilisateur

		user.first_name = this.username;	// on lui assigne son nom
		user.last_name  = this.lastname;		// on lui assigne un prenom
		
		this.userService.postUser(user); 	// on apelle la methode pour l'enregistrer
	}

	update(){
		const user = new User();
		user.id = this.idmodif;
		user.first_name = this.username;
		user.last_name  = this.lastname;
		this.userService.putUser(user); //put = update
	}

	ajout() {
		
		const user = new User();
		user.first_name = this.username;
		user.last_name = this.lastname;
		this.userService.postUser(user); //post = ajout
	
	}
	
	supprimer(){
		this.userService.deleteUser(this.idsupp);
	}
}
