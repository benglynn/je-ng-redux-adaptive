The web app is the first implementation of a [common adaptive architecture][], read about that first and understand how state, actions, reducers and effects work in a redux architecture.

## Compile time

### State slices

State is made up of named slices, for example here's a simple slice `postcode` which is either nothing or a string. Each slice defines an interface for its state and value for its initial state.

```ts
export const POSTCODE = 'POSTCODE'; // slice name
export type PostcodeState = string|null; // possible state
export const initialState: State = null; // initial state
```

### Actions

Actions are simple classes which always have a type and sometimes have a payload:

```ts
interface Action {
  type: string;
  payload?: any;
}
```

Here's a simple action encapsulating the intent to update the postcode. 

```ts
export const UPDATE_POSTCODE = 'UPDATE_POSTCODE';

class UpdatePostcode implements Action {
  readonly type = UPDATE_POSTCODE;
  constructor(public payload: PostcodeState) {};
}
```

### Reducers

Reducers take an action and a slice of state and either return that same slice, or a new slice to replace it. 

```ts
type Reducer<T> = (action: Action, state: T) => T
```

Here's a reducer that updates the `postcode` slice of state in response to an `UPDATE_POSTCODE` action:

```ts
updatePostcode(action: Action, state: PostcodeState) => action.payload;
```

Reducers must be registered with a plain text name. 

```ts
this.reducerRegistry.register(updatePostcode, 'updatePostcode');
```

> A registered reducer won't actually do anything yet, you could register 100 and none of them would be active. To be part of the app, a reducer's registration name must be referenced in the active configuration, as explained below. This applies to effects, views, and container views as well as reducers.

### Effects
...


### Container views and views
...

### Configuration

An important slice of state is `configuration` which contains a default map of each slices actions to reducers.

```ts
export const initialConfiguration: ConfigurationState = {
  postcode: {
    reducers: {
      updatePostcode: 'updatePostcode',
      // ...
    },
    // ... effects and views to come
  }
};
```

Everything in the state is serialisable so the identifiers are plain text, but they correspond to the name they were registered with.

### Adaptations

Adaptations have their own slice of state and may define and register actions, reducers, effects, container views and views of their own. 

Each adaptation registers as configuration reducer that will be used to update the configuration state if that adaptation is activated.
```ts
updateConfiguration(state: ConfigurationState, action: Action): ConfigurationState {
    // change the default configuration to point to my components
};
this.adaptationRegistry.register('personalisedSearch', this.updateConfiguration);
```

## Bootstrap

When the app comes to life, regardless of the entry point, the user sees a default loading screen. The app loads adaptation config (from a gitignored `/adaptations.json` or from a web service) which looks like this:

```json
{
  "adaptations": ["personalisedSearch"]
}
```

For each adaptation in the list, that adaptation's configuration reducer updates the configuration of the app. Once that's done, the app can present the appropriate container view for the entry point. 

In this way an adaptation is able to adapt any of the component parts of the app, or add entirely new ones. Where it's safe to do so, more than one adaptation may adapt the app at the same time.

## Runtime

The flow of state around the application is exactly the same as redux: state flows into subscribers, actions are dispatched and result in slices of state being reduced or in side effects and the dispatching of new actions. 

What's different is the way in which reducers or events that are interested in a certain action are found, in both cases the configuration is deferred to and the reducer or effect is retrieved from a registry.


[common adaptive architecture]: https://goo.gl/coMJHq
