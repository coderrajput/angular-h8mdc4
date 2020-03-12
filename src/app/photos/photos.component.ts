import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { PhotoService } from './photos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Photo } from '../model/photo.model';
import { PhotoDirective } from './photo.directive';
import { Subscription } from 'rxjs';
import { Photocomponent } from './photo/photo.component';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{
    photos: Photo[]=[];
    albumId: number;
    isLoading: boolean;
    @ViewChild(PhotoDirective,{static: false}) photoPlaceHolder: PhotoDirective;
    private closeSubcription= new Subscription();
    ngOnInit(){
        this.isLoading=true;
        this.route.params.subscribe((params: Params)=>{
            this.albumId=+params['id'];
            this.fetchPhotos(this.albumId);
        });

    }

    constructor(private photoService: PhotoService, private router: Router, private route: ActivatedRoute, private componentFactoryResolver: ComponentFactoryResolver){}

    fetchPhotos(id: number){
        this.photoService.fetchPhotos(id).subscribe((photos)=>{
            this.photos=photos;
            console.log(this.photos);
            this.isLoading=false;
        });
    }

    showPhoto(imageUrl: string){
        const photoFactory= this.componentFactoryResolver.resolveComponentFactory(Photocomponent);
        const hostViewContainerRef=this.photoPlaceHolder.viewContainerRef;
        hostViewContainerRef.clear();
        const componentRef=hostViewContainerRef.createComponent(photoFactory);
        componentRef.instance.photo=imageUrl;
        this.closeSubcription=componentRef.instance.close.subscribe(()=>{
            this.closeSubcription.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
}