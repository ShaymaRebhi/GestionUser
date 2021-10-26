import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:FormGroup;
msg :string;
  constructor(private data : SharedDataService , private router : Router , private f : FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.f.group({
      'email': ['',[Validators.required]],
      'password': ['',[Validators.required,Validators.minLength(3)]]
    })
  }
  checkUser(myForm: FormGroup){
    this.data.list.forEach(
        (user:User)=> {
          if(user.email===myForm.controls['email'].value && 
             user.password===myForm.controls['password'].value) {
                this.router.navigate(['/'])
             }
             else {
               this.msg='please give a valid account'
             }
        }
    );
  }

}
