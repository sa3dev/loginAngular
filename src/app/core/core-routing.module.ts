import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , Router, RouterModule } from '@angular/router';


import { UserslistComponent } from './users/components/userslist/userslist.component';
import { UserService } from './users/service/user.service';
import { LoginComponent } from './users/components/login/login.component';


const routes : Routes = [
	{
		path:'',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent 
	},
	{
		path: 'listusers',
		canActivate:[UserService],   // a declarer dans notre service ici le boolean est false
		component: UserslistComponent 
	}
]


@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class CoreRoutingModule { }
