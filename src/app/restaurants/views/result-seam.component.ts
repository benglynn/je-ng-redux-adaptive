import { Inject, Input, Component, ChangeDetectionStrategy, ViewChild,
  AfterViewInit, ComponentFactoryResolver, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { IConfigurationState } from '../../app.configuration';
import { ResultComponent, IResultView } from '../../restaurants/views/result.component';
import { ResultSeamDirective } from '../../restaurants/views/result-seam.directive';
import { Restaurant } from '../../restaurants/restaurant';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Viewable } from '../../presentation/viewable';
import { VIEWS, IViews } from '../../app.views';

@Component({
  selector: 'app-result-seam',
  template: `<ng-template appResultSeam></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultSeamComponent implements AfterViewInit, OnDestroy {

  @ViewChild(ResultSeamDirective) resultDirective: ResultSeamDirective;
  @Input() restaurant: Restaurant;
  @Input() viewName$: Observable<string>;
  viewNameSubscription: Subscription;

  constructor(
    @Inject(VIEWS) private views: IViews|IViews,
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.viewNameSubscription = this.viewName$.subscribe(viewName => {
      this.resultDirective.viewContainerRef.clear();
      const component = this.views[viewName] as Viewable;
      const factory = this.cfr.resolveComponentFactory(component);
      const componentRef = this.resultDirective.viewContainerRef
        .createComponent(factory);
      (<IResultView>componentRef.instance).restaurant = this.restaurant;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.viewNameSubscription.unsubscribe();
  }
}
