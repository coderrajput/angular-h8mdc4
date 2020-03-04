import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { IndividualAlbumComponent } from './albums/individual-album/individual-album.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,AppRoutingModule ],
  declarations: [ AppComponent , AlbumsComponent,IndividualAlbumComponent,PhotosComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
