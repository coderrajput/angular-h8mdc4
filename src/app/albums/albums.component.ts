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
   totalRec : number;
  page: number = 1;

  ngOnInit() {
    this.getAlbums();
  }


  getAlbums(){
    this.page=1;
    this.totalRec=this.albums.length;
    this.albumService.fetchAlbums().subscribe( (albums)=>{
      this.albums=albums;
      console.log(this.albums);
  });
  
  }

}
