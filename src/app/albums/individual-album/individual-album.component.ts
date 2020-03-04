import { Component, OnInit, Input } from '@angular/core';
// import { Album } from '.../model/album.model';
import { Album } from '../../model/album.model.ts';

@Component({
  selector: 'app-individual-album',
  templateUrl: './individual-album.component.html',
  styleUrls: ['./individual-album.component.css']
})
export class IndividualAlbumComponent implements OnInit {
  @Input()album: Album;
  @Input()index: number;
  constructor() { }

  ngOnInit() {
    //console.log(this.index);
  }



}
