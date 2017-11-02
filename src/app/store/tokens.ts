import { Injectable, Inject, NgModule, InjectionToken } from '@angular/core';
import { IAppStateX } from './types';

export const INITIAL_STATE = new InjectionToken<IAppStateX>('initial state');
