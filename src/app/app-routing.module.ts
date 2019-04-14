import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeasonListComponent} from './components/season-list/season-list.component';

const routes: Routes = [
  {
    path: '',
    component: SeasonListComponent,
  },
  {
    path: '**',
    redirectTo: '',
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
