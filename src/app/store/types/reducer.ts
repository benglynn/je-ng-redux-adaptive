import { IActionX } from '.';

export type IReducerX<T> = (action: IActionX, state: T) => T
