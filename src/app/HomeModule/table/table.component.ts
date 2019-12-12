import { Component, OnInit, OnChanges } from '@angular/core';
import { RegistrationUser } from 'src/assets/models/registrationuser.model';
import { Gender, Pet } from 'src/assets/enums/enums';
import { RegistrationService } from '../services/RegistredUsers.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public service: RegistrationService) {
  }

  ngOnInit() {
  }
}
