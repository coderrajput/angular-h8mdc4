import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { IndividualAlbumComponent } from './albums/individual-album/individual-album.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { ShortenTitlePipe } from './pipe/shorten-title.pipe';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,AppRoutingModule,NgxPaginationModule ],
  declarations: [ AppComponent , AlbumsComponent,IndividualAlbumComponent,PhotosComponent,ShortenTitlePipe, LoadingIndicatorComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
