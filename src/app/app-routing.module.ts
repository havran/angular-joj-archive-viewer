import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeasonListComponent} from './components/season-list/season-list.component';

const routes: Routes = [
  {
    path: 'seasons',
    component: SeasonListComponent,
  },
  {
    path: '**',
    redirectTo: '/seasons',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        initialNavigation: 'disabled',
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
