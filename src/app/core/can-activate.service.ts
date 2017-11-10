import { Injectable } from '@angular/core';
import { CanActivate, Router, Routes, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TestComponent } from '../core/views/test.component';
import { Store } from '../store/store';
import { IConfigurationState } from '../configuration';

const newRoutes: Routes = [
  { path: 'test',
    component: TestComponent
  },
];

@Injectable()
export class CanActivateInitial implements CanActivate {

  constructor( private router: Router, private store: Store ) {}

  mapStateRoutes(configuration: IConfigurationState) {
    console.log(configuration);
    this.router.resetConfig(newRoutes);
  }

  canActivate(_, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('configuration')
      .map(configuration => {
        this.mapStateRoutes(configuration);
        this.router.navigateByUrl(state.url);
        return false;
      });
  }
}
