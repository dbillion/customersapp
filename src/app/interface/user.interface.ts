import {Coordinate} from "./coordinate.interface";

export interface User{
  uuid:string;
  firstName:string;
  lastName:string;
  email:string;
  username:string;
  gender:string;
  address:string;
  dateofBirth:string;
  phone:string;
  imageUrl:string;
  coord:Coordinate;
}
