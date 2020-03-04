import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Photo } from '../model/photo.model';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{
    photos: Photo[]=[];
    albumId: number;
    ngOnInit(){
        
        this.route.params.subscribe((params: Params)=>{
            this.albumId=+params['id'];
            this.fetchPhotos(this.albumId);
        });

    }

    constructor(private photoService: PhotoService, private router: Router, private route: ActivatedRoute){}

    fetchPhotos(id: number){
        this.photoService.fetchPhotos(id).subscribe((photos)=>{
            this.photos=photos;
            console.log(this.photos);
        });
    }
}