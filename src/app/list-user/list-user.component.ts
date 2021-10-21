import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
    allUser : User[];
    list:User[];
    inputCategory:string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.allUser=[
      {
        idUser: 1,
        firstName: "Mila",
        lastName: " Kunis",
        birthDate: "1999-06-30",
        accountCategory: "Admin",
        email: "mila@kunis.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
        profession: "Software Engineer"
        },
        {
        idUser: 2,
        firstName: "George",
        lastName: "Clooney",
        birthDate: "1999-06-30",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
        profession: "Software Engineer"
        },
        {
        idUser: 3,
        firstName: "George",
        lastName: "Clooney",
        birthDate: "1999-06-30",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
        profession: "Software Engineer"
        },
        {
        idUser: 4,
        firstName: "Ryan",
        lastName: "Gossling",
        birthDate:"1999-06-30",
        accountCategory: "Golden",
        email: "Ryan@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
        profession: "Software Engineer"
        
        
        },
        {
        idUser: 5,
        firstName: "Robert",
        lastName: "Downey",
        birthDate: "1999-06-30",
        accountCategory: "Blocked Account",
        email: "robert@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
        profession: "Software Engineer"
        },
    ];
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
