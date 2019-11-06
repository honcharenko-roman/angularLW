import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './HomeModule/userinfo/userinfo.component';
import { ArticlesComponent } from './HomeModule/articles/articles.component';
import { ArticleComponent } from './HomeModule/articles/article/article.component';
import { UpperStringPipe } from 'src/assets/CustomPipes/UpperEveryStringPipe';
import { BootstrapComponent } from './HomeModule/bootstrap/bootstrap.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  {
    path: 'test',
    component: BootstrapComponent,
    data: { title: 'Bootstrap' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    ArticlesComponent,
    ArticleComponent,
    UpperStringPipe,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
