import { Injector } from '@angular/core';
import { IAction } from '../store/types';
import { Router } from '@angular/router';
import { VisitAreaAction } from '../area/actions';
import { Status } from '../restaurants/state';
import { RestaurantsService } from '../restaurants';
import { Store } from '../store/store';

export function visitArea (action: VisitAreaAction, injector: Injector) {
  const router = injector.get(Router);
  router.navigateByUrl(`/${action.payload}`);
}

export const effects = {
  'visitArea': visitArea
};
