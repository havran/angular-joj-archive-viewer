import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators/tap';
import {BehaviorSubject} from 'rxjs';
import {APP_BASE_HREF} from '@angular/common';

export function jojServiceFactory(
  jojService: JojService,
) {
  return () => jojService.load();
}

export type videoResolution = '360p' | '540p' | '720p';
export type videoLink = {[key in videoResolution]: string};

export interface JojEpisode {
  episode: string;
  videoLinks: videoLink[];
}

export interface JojSeason {
  season: string;
  episodes: JojEpisode[];
}

@Injectable()
export class JojService {

  private seasonsData: BehaviorSubject<JojSeason[]> = new BehaviorSubject<JojSeason[]>([]);

  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string,
    private httpClient: HttpClient,
  ) {}

  get data(): BehaviorSubject<JojSeason[]> {
    return this.seasonsData;
  }

  load() {
    const dataPath = this.baseHref + 'assets/data/inkognito.json';

    this.httpClient
      .get(dataPath)
      .pipe(
        tap((response: JojSeason[]) => {
          console.log('~~~> JojService#load: in http client response', response);
          this.seasonsData.next(response);
        }),
      )
      .toPromise();
  }

}
