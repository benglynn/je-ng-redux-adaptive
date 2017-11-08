import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoadedComponent]',
})
export class LoadedComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
