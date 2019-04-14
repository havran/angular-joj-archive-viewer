import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {JojEpisode, JojSeason} from '../../services/joj/joj.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit, OnChanges {

  @Input() season: JojSeason;
  selectedEpisode: JojEpisode;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedEpisode = undefined;
  }

  openEpisode(ev: Event, i: number) {
    this.selectedEpisode = this.season.episodes[i];
    console.log('~~~> select episode', i);
    ev.preventDefault();
  }
}
