import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedDataService} from "../services/shared-data.service";
import {User} from "../model/User";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {
  @Input()user:User
  @Output() getByCatNotifEvent = new EventEmitter<User>();


  constructor() { }

  ngOnInit(): void {
  }
  getByCatNotif(){
    this.getByCatNotifEvent.emit(this.user)
  }
}
