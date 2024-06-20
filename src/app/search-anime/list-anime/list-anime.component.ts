import { Component, Input, Output,EventEmitter } from '@angular/core';
import { IAnime } from '../search-anime.interface';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.component.html',
  styleUrl: './list-anime.component.css',
})
export class ListAnimeComponent {
  @Input() animeData!: IAnime;
  @Output() redirect: EventEmitter<string> = new EventEmitter<string>();

  onView(url: string) {
    this.redirect.emit(url);
  }
}
