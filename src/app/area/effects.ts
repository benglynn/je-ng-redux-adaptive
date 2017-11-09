import { Injector } from '@angular/core';
import { IAction } from '../store/types';
import { Router } from '@angular/router';
import { UpdateAreaAction } from '../area/actions';
import { Status } from '../restaurants/state';
import { RestaurantsService } from '../restaurants';
import { Store } from '../store/store';

export function updateArea (action: UpdateAreaAction, injector: Injector) {
  const router = injector.get(Router);
  router.navigateByUrl(`/${action.payload}`);
}

export const effects = {
  'updateArea': updateArea
};
