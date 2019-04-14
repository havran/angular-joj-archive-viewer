import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JojService, jojServiceFactory } from './services/joj/joj.service';
import { SeasonListComponent } from './components/season-list/season-list.component';
import { SeasonComponent } from './components/season/season.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {APP_BASE_HREF} from '@angular/common';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SeasonListComponent,
    SeasonComponent,
    EpisodeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    JojService,
    {
      provide: APP_INITIALIZER,
      useFactory: jojServiceFactory,
      deps: [JojService],
      multi: true,
    },
    {
      provide: APP_BASE_HREF,
      useValue: environment.baseHref,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
