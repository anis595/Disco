import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { DeleteComponent } from './pages/delete/delete.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ReadComponent } from './pages/read/read.component';


@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule
  ]
})
export class TrackModule { }
