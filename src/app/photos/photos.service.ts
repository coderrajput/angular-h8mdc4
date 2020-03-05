import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../model/photo.model';

@Injectable({
    providedIn: 'root'
})
export class PhotoService{
    constructor(private http: HttpClient){}

    photos: Photo[]=[];


    fetchPhotos(id: number){
        return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?albumId='+id);
    }
}