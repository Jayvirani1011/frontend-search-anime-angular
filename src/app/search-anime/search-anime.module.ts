import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchAnimeRoutingModule } from './search-anime-routing.module';
import { SearchAnimeComponent } from './search-anime.component';
import { ListAnimeComponent } from './list-anime/list-anime.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchAnimeComponent, ListAnimeComponent],
  imports: [CommonModule, SearchAnimeRoutingModule, FormsModule ],
  providers: [],
})
export class SearchAnimeModule {}
