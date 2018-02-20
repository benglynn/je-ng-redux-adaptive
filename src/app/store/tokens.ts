import { Injectable, Inject, NgModule, InjectionToken } from '@angular/core';
import { State } from './state';

export const INITIAL_STATE = new InjectionToken<State>('initial state');
