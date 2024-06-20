import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAnimeComponent } from './search-anime.component';

const routes: Routes = [{ path: '', component: SearchAnimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchAnimeRoutingModule { }
