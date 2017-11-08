import { Component, ComponentFactoryResolver, AfterViewInit, ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadedComponent } from './loaded.component';
import { LoadedComponentDirective } from './loaded-component.directive';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-container.component.html'
})
export class LoadingContainerComponent implements AfterViewInit {

  @ViewChild(LoadedComponentDirective) loadedHost: LoadedComponentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.route.data.subscribe(data => {
      const rootView = (data as { rootView: any }).rootView;
      const factory = this.componentFactoryResolver.resolveComponentFactory(rootView);
      this.loadedHost.viewContainerRef.createComponent(factory);
    });
  }

}
