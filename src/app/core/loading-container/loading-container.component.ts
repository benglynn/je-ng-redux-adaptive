import { Component, ComponentFactoryResolver, AfterViewInit, ViewChild,
  ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadedComponent } from './loaded.component';
import { LoadedComponentDirective } from './loaded-component.directive';
import { Store } from '../../store/store';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingContainerComponent implements AfterViewInit {

  @ViewChild(LoadedComponentDirective) loadedHost: LoadedComponentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.route.data.subscribe(data => {
      const rootView = (data as { rootView: any }).rootView;
      const factory = this.componentFactoryResolver.resolveComponentFactory(rootView);
      this.loadedHost.viewContainerRef.createComponent(factory);
      this.cdr.detectChanges();
    });
  }

}
