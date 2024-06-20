import { Component } from '@angular/core';
import { AnimeService } from './anime.service';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { IAnime, IPagination } from './search-anime.interface';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrl: './search-anime.component.css'
})
export class SearchAnimeComponent {
  constructor(private _animeService: AnimeService) {}
  private searchValue: Subject<string> = new Subject<string>();
  private pagination: IPagination = {
    currentPage: 1,
    limit: 15,
    searchValue: '',
  };
  totalData: number = 0;
  animeData!: IAnime[];
  animeNames: string[] = ['Naruto', 'One Piece', 'Attack on Titan', 'Bleach', 'Dragon Ball Z','Taki Tachibana', 'Satoru Gojoisen'];
  searchText: string = '';

  ngOnInit() {
    this.getAnimeData();
    this.searchValue.pipe(debounceTime(300)).subscribe((searchValue) => {
      this.pagination.searchValue = searchValue;
      this.getAnimeData();
    });
  }

  onAnimeButtonClick(animeName: string) {
    this.searchText = animeName;
    this.searchValue.next(animeName);
  }

  onChangePage(type: 'next' | 'prev') {
    if (type === 'prev') {
      if (this.pagination.currentPage > 1) {
        this.pagination.currentPage--;
        this.getAnimeData();
      }
    } else {
      this.pagination.currentPage++;
      this.getAnimeData();
    }
  }

  onSearchAnime(event: Event) {
    const searchedValue = (event.target as HTMLInputElement)?.value;
    if (searchedValue !== undefined) {
      this.searchValue.next(searchedValue);
    }
  }

  private animeDataSubscription!: Subscription;
  private getAnimeData() {
    this.animeDataSubscription = this._animeService
      .getData$(this.pagination)
      .subscribe((res) => {
        this.animeData = res.data;
        this.totalData = res.pagination.items.total;
      });
  }

  viewAnimePage(url: string) {
    window.open(url, '_blank');
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  ngOnDestroy() {
    if (this.animeDataSubscription) {
      this.animeDataSubscription.unsubscribe();
    }
  }
}
