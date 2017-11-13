import { Input, Component, ChangeDetectionStrategy, ViewChild, AfterViewInit,
  ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { IConfigurationState } from '../../configuration';
import { ResultComponent, IResultView } from '../../restaurants/views/result.component';
import { ResultSeamDirective } from '../../restaurants/views/result-seam.directive';
import { IRestaurant } from '../../restaurant';
import { Registry } from '../../store/registry';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-result-seam',
  template: `<ng-template appResultSeam></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultSeamComponent implements AfterViewInit {

  @ViewChild(ResultSeamDirective) resultDirective: ResultSeamDirective;
  @Input() restaurant: IRestaurant;
  @Input() viewName$: Observable<string>;

  constructor(
    private registry: Registry,
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.viewName$.subscribe(viewName => {
      this.resultDirective.viewContainerRef.clear();
      const component = this.registry.getView(viewName);
      const factory = this.cfr.resolveComponentFactory(component);
      const componentRef = this.resultDirective.viewContainerRef
        .createComponent(factory);
      (<IResultView>componentRef.instance).restaurant = this.restaurant;
      this.cdr.detectChanges();
    });
  }
}
