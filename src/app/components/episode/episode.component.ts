import {Component, Input, OnInit} from '@angular/core';
import {JojEpisode, videoLink} from '../../services/joj/joj.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  @Input() episode: JojEpisode;

  constructor() {}

  ngOnInit() {}

  qualityKeys(links: videoLink[]) {
    return Object.keys(links);
  }
}
