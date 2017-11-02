import { Injectable, Inject, NgModule, InjectionToken } from '@angular/core';
import { IAppStateX } from './state';

export const INITIAL_STATE = new InjectionToken<IAppStateX>('initial state');
