import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'search-anime', loadChildren: () => import('./search-anime/search-anime.module').then(m => m.SearchAnimeModule) },
  { path: '**', redirectTo: 'search-anime' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
