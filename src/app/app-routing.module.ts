import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieOneTileComponent } from './movie-one-tile/movie-one-tile.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';

const routes: Routes = [
  {path: 'pageOne', component: MovieTileComponent},
  {path: 'pageTwo', component: MovieListComponent},
  {path: '**', redirectTo: '/pageOne', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
