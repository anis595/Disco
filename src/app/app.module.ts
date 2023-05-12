import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModule } from './pages/album/album.module';
import { TrackModule } from './pages/track/track.module';
import { ArtistModule } from './pages/artist/artist.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AlbumModule,
    ArtistModule,
    TrackModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
