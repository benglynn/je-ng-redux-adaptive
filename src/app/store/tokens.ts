import { Injectable, Inject, NgModule, InjectionToken } from '@angular/core';
import { IAppState } from './types';

export const INITIAL_STATE = new InjectionToken<IAppState>('initial state');
