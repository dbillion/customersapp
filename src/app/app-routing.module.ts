import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule  } from '@angular/common';
import {UsersComponent} from "./component/users/users.component";
import {UserdetailComponent} from "./component/userdetail/userdetail.component";
import {UserResolver} from "./service/user.resolver";


const routes: Routes=[
  {path: 'users', component: UsersComponent},
  {path: 'user/:uuid', component: UserdetailComponent, resolve:{resolvedResponse:UserResolver}},
  // {path: '**', component: UsersComponent}, first way
  {path: '**', redirectTo: 'users'}, //second and cool way
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
