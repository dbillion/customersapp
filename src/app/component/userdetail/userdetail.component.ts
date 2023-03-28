import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent {

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      console.log('USER ID: ',params.get('uuid')!);
      // the expresssion = +params.get('uuid')! means that , + if the there is no number, then params of the uuid does not exist,
      // but when the uuid is string, we remove the + sign in parameterand leave the params.get('uuid') like this and fix the main supplyer in the uuid,
      //this is the single reason for our branching
      // it currently works but because the uuid is a string, it displays not a number
      this.userService.getUser(params.get('uuid')!).subscribe(
        (response: any)=>{
          console.log(response);

        }
      )
    })
  }
}
