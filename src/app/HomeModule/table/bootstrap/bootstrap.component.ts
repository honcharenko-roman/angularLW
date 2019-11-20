import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { RegistrationUser } from 'src/assets/models/registrationuser.model';
import { Gender, Pet } from 'src/assets/enums/enums';
import { Location } from '@angular/common';
import { RegistrationService } from '../../services/RegistredUsers.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {Router} from '@angular/router'


@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  providers: [RegistrationService],
  styleUrls: ['./bootstrap.component.scss']
})


export class BootstrapComponent implements OnInit {

  pets = Object.keys(Pet);
  orderForm: FormGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private service: RegistrationService,
              private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.isSubmited = true;

    if (this.orderForm.invalid) {
      return;
    }

    const user = this.orderForm.value as RegistrationUser;
    this.service.addUser(user);
    this.router.navigate(['/table']);
  }

  private buildForm() {
    this.orderForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      pet: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
}
