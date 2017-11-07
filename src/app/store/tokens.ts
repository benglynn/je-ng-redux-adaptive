import { Injectable, Inject, NgModule, InjectionToken } from '@angular/core';
import { IAppState } from '../state';

export const INITIAL_STATE = new InjectionToken<IAppState>('initial state');
