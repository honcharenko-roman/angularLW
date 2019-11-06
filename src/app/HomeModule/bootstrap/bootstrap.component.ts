import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {


  myForm: FormGroup = new FormGroup({
    email: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

}
