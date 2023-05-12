import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { UpdateComponent } from './pages/update/update.component';
import { ReadComponent } from './pages/read/read.component';
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    ReadComponent,
    IndexComponent,
  ],
  imports: [CommonModule, AlbumRoutingModule, HttpClientModule],
})
export class AlbumModule {}
