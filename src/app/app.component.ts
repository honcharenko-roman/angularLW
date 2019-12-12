import { Component, OnInit } from '@angular/core';
import { AuthService } from './HomeModule/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private translateService: TranslateService) {
  }

  private isLogged(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit() {
    this.translateService.langs = ['en', 'ru'];
    this.translateService.setDefaultLang('ru');

    this.translateService.use(localStorage.getItem('lang'));
  }

  setRu(){
    this.translateService.use('ru');
  }

  setEng(){
    this.translateService.use('en');
  }

  LogOut() {
    this.authService.logout();
  }
}
