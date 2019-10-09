import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
    public text: string;
    public name: string;
    user: User;

  constructor() {
  }

  ngOnInit() {
    this.name = 'Roman';
    this.user = new User(this.name, 5);
    this.text = 'Text';
  }

}
