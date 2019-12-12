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

  LogOut() {
    this.authService.logout();
  }
}
