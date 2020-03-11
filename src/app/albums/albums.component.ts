import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AlbumService } from '../service/album.service';
import { Album } from '../model/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  isLoading: boolean;
  constructor(private albumService: AlbumService) { 
    
  }
  albums: Album[]=[];

  ngOnInit() {
    this.isLoading=true;
    this.getAlbums();
  }

 

  getAlbums(){
   
    this.albumService.fetchAlbums().subscribe( (albums)=>{
      this.albums=albums;
      console.log(this.albums);
      this.isLoading=false;
  });
  
  }

}
