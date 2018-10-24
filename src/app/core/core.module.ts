import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './users/service/user.service';
import { UserslistComponent } from './users/components/userslist/userslist.component';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './users/components/login/login.component';
import { FormsModule ,  ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		CommonModule,
		CoreRoutingModule,
		RouterModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports:[ UserslistComponent , LoginComponent,RouterModule ],
	declarations: [ UserslistComponent, LoginComponent ],
	providers: [ UserService ] 
})
export class CoreModule { }
