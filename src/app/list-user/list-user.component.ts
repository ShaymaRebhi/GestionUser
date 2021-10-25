import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../model/User';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
    allUser : User[];
    list:User[];
    inputCategory:string;
  constructor(private route : ActivatedRoute, private data:SharedDataService) { }

  ngOnInit(): void {
    this.allUser=this.data.list;
    this.route.paramMap.subscribe(
      (params:ParamMap)=> 
      {let category =params.get('category')
      this.list=this.allUser.filter(user=>user.accountCategory === category)
    });

  }
  delete(user:User){
    let i = this.allUser.indexOf(user);
    this.allUser.splice(i,1);
  }
  getColor(user:User){
    // if(user.accountCategory=='Admin')
    // return 'red' 

  }

}
