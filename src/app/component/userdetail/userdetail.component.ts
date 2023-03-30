import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UserService} from "../../service/user.service";
import {Response} from "../../interface/response.interface";

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit{
  response: Response

  mode: 'edit'| 'locked' ='locked';
  buttonText: string ='Edit';

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      console.log('USER ID: ',params.get('uuid')!);
      this.userService.getUser(params.get('uuid')!).subscribe(
        (response: any)=>{
          this.response=response;
          console.log(response);


        }
      )
    })
  }

  changeMode(mode?:'edit' | 'locked'): void{
    console.log(mode);
    this.mode= this.mode==='locked'?'edit' :'locked';
    this.buttonText = this.buttonText ==='Edit' ? 'Save Changes' :'Edit';
    if(mode==='edit'){
      //logic to update the user on the backend
      console.log('updating the usr on the backend');
    }
  }
}
