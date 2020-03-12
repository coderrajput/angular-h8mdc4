import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-photo',
    templateUrl:'./photo.component.html',
    styleUrls:['./photo.component.css']
})
export class Photocomponent{
    @Input() photo: string;
    @Output()close= new EventEmitter<void>();

    onClose(){
        this.close.emit();
    }
}