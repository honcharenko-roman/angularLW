import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TableComponent } from './HomeModule/table/table.component';
import { LoginComponent } from './HomeModule/login/login.component';
import { NoAuthGuard } from './HomeModule/guards/no-auth.guard';
import { AuthGuard } from './HomeModule/guards/auth.guard';
import { ArticlesComponent } from './HomeModule/articles/articles.component';
import { WeatherComponent } from './HomeModule/weather/weather.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [NoAuthGuard] },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: [
      { path: 'weather', component: WeatherComponent},
      { path: 'table', component: TableComponent },
      { path: 'articles', component: ArticlesComponent }
    ]
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    data: { role: 'user' },
    children: [
      { path: 'weather', component: WeatherComponent},
      { path: 'articles', component: ArticlesComponent }
    ]
  },
  { path: '**', component: LoginComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
