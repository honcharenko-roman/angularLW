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
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  {
    path: 'table/add',
    component: BootstrapComponent,
    data: { title: 'Bootstrap' }
  },
  {
    path: 'table',
    component: TableComponent,
    data: { title: 'Table' }
  },
  {
    path: 'weather',
    component: WeatherComponent,
    data: { title: 'Weather' }
  }
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
