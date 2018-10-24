import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user-model';

import { Observable , of} from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Router  } from '@angular/router';

@Component({
	selector: 'app-userslist',
	templateUrl: './userslist.component.html',
	styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

	//Ici on type la variable car c'est ce quon recupere du service get qui est lui un observable
	private ListUsers: Observable<User[]>;
	private isLoaded : boolean;

	constructor( 
		private usersService: UserService) { }

	ngOnInit() {
		this.getListUsers();
	}


	getListUsers() :void{

		this.isLoaded = false;
		// ici on passe en mode multithread donc les variables apres seront executé 
		//l'appel est lancé mais l'execution des taches continue
		this.ListUsers = this.usersService.getListUsers()
						.pipe( finalize(  () => this.isLoaded = true ) )  ;
		
		//pour forcer l'affichage en fonction de lobservable 
		// on rajoute le pipe avec ses different fnction a importer finalize()
		
	}


}
