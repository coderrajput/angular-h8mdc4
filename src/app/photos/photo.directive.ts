import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector:'[photoHolder]'
})
export class PhotoDirective{
    constructor(public viewContainerRef: ViewContainerRef){}
}