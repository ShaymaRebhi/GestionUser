import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent implements OnInit {
user:User;
  constructor(private data : SharedDataService, private router:Router) { }

  ngOnInit(): void {
    this.user = new User();
  }
 save(){
   this.user.accountCategory='Customer';
 this.data.list.push(this.user)
  this.router.navigate(['/user'])
 }
}
