import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TableComponent } from './HomeModule/table/table.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
