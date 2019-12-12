import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './HomeModule/userinfo/userinfo.component';
import { ArticlesComponent } from './HomeModule/articles/articles.component';
import { ArticleComponent } from './HomeModule/articles/article/article.component';
import { UpperStringPipe } from 'src/assets/CustomPipes/UpperEveryStringPipe';
import { BootstrapComponent } from './HomeModule/table/bootstrap/bootstrap.component';
import { Routes, RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TableComponent } from './HomeModule/table/table.component';
import { RegistrationService } from './HomeModule/services/RegistredUsers.service';
import { WeatherComponent } from './HomeModule/weather/weather.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LoginComponent } from './HomeModule/login/login.component';
import { AuthService } from './HomeModule/services/auth.service';
import { TokenInterceptor } from './HomeModule/services/token.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

function getToken() {
  return localStorage.getItem('accessToken');
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    ArticlesComponent,
    ArticleComponent,
    UpperStringPipe,
    BootstrapComponent,
    TableComponent,
    WeatherComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['pnit-lessons.azurewebsites.net'],
        blacklistedRoutes: ['/Token']
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    RegistrationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
