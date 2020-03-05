import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Album } from '../model/album.model';
import { map, exhaustMap,tap } from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class AlbumService {

    constructor(private http: HttpClient){}

    fetchAlbums(){
       return  this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums').pipe(tap((albums)=>{
               albums.map(singleAlbum=>{
                   this.fetchUser(singleAlbum.userId).subscribe((user: any)=>{
                    singleAlbum.userName= user[0].username;
                   });
                    
                });
            })
        );
    }


    fetchUser(id: number){
        return this.http.get<any>('https://jsonplaceholder.typicode.com/users?id='+id);
    }
}