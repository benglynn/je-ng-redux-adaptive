import { Inject, Input, Component, ChangeDetectionStrategy, ViewChild,
  AfterViewInit, ComponentFactoryResolver, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { ResultComponent, IResultView } from '../../restaurants/views/result.component';
import { ResultSeamDirective } from '../../restaurants/views/result-seam.directive';
import { Restaurant } from '../../restaurants/restaurant';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Viewable } from '../../presentation/viewable';
import { View } from '../../presentation/view';
import { viewInstance } from '../../presentation/view-instance';

@Component({
  selector: 'app-result-seam',
  template: `<ng-template appResultSeam></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultSeamComponent implements AfterViewInit, OnDestroy {

  @ViewChild(ResultSeamDirective) resultDirective: ResultSeamDirective;
  @Input() restaurant: Restaurant;
  @Input() view$: Observable<View>;
  viewSubscription: Subscription;

  constructor(
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {

    this.viewSubscription = this.view$.subscribe(view => {
      const component = viewInstance(view);
      this.resultDirective.viewContainerRef.clear();
      const factory = this.cfr.resolveComponentFactory(component);
      const componentRef = this.resultDirective.viewContainerRef
        .createComponent(factory);
      (<IResultView>componentRef.instance).restaurant = this.restaurant;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.viewSubscription.unsubscribe();
  }
}
