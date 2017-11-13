import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appResultSeam]',
})
export class ResultSeamDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
