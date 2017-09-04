import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteLanguagesComponent } from './favorite-languages/favorite-languages.component';

const routes: Routes = [
  {
    path: 'fl',
    component:FavoriteLanguagesComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
