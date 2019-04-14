import { Component, OnInit } from '@angular/core';
import {JojSeason, JojService} from '../../services/joj/joj.service';
import {filter, map} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})
export class SeasonListComponent implements OnInit {

  seasons: JojSeason[];
  selectedSeason: JojSeason;

  constructor(
    private jojService: JojService,
  ) {}

  ngOnInit() {
    this.jojService.data
      .pipe(
        filter((data: JojSeason[]) => data.length !== 0),
        tap((data: JojSeason[]) => {
          this.seasons = data;
          this.selectedSeason = this.seasons[0];
          console.log('~~~> SeasonListComponent#ngOnInit', this.seasons);
        }),
      )
      .subscribe();
  }

  openEpisodesListsForSeason(ev: Event, i: number) {
    this.selectedSeason = this.seasons[i];
    console.log('~~~> select season', i);
    ev.preventDefault();
  }

}
