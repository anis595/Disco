import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModule } from './pages/album/album.module';
import { TrackModule } from './pages/track/track.module';
import { ArtistModule } from './pages/artist/artist.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AlbumModule,
    ArtistModule,
    TrackModule,
    HomepageModule,
    CoreModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
