import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../service/album.service';
import { Album } from '../model/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumService: AlbumService) { }
  albums: Album[]=[];

  ngOnInit() {
    this.getAlbums();
  }


  getAlbums(){

    this.albumService.fetchAlbums().subscribe( (albums)=>{
      this.albums=albums;
      console.log(this.albums);
  });
  
  }

}
