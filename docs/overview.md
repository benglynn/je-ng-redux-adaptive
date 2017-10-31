The web app is the first implementation of a [common adaptive architecture][], read about that first and understand how state, actions, reducers and effects work in a redux architecture.

## Compile time

State is made up of named slices, for example `restaurants`. Each slice may have associated actions, reducers, effects, container views and views. 

### Actions

Here's the definition of a couple of actions:

```ts
export class LoadRestaurants implements Action {
  readonly type = LOAD_RESTAURANTS;
  constructor(public payload: Postcode) {}
}

export class UpdateRestaurants implements Action {
  readonly type = UPDATE_RESTAURANTS;
  constructor(public payload: Restaurant[]) {}
}
export class UpdateRestaurants implements Action {
  readonly type = UPDATE_RESTAURANTS;
  constructor(public payload: Restaurant[]) {}
}
```

### Reducers

Some actions have associated reducers, these are defined and registered like this:

```ts
updateRestaurants(state<RestaurantState>, action: UpdateRestaurants) {
  return { status: Status.Okay, data: action.payload};
}
this.reducerRegistry.register('updateRestaurants', this.updateRestaurants);
```

### Effects

Some actions have associated side effects which result in a new action or actions. These effects are registered like this:

```ts
loadRestaurants(action: LoadRestaurants): Observable<Action> {
  return this.restaurantService.getRestaurants(action.payload)
      .map(data => new this.restaurantService.UpdateRestaurants(data));
}
this.effectRegistry.register('loadRestaurants',this.loadRestaurants);
```

### Container views and views
Todo...

### Configuration

An important slice of state is `configuration` which contains a default map of actions to reducers and to effects, here's a chunk:

```ts
export const initialConfiguration: ConfigurationState = {
  restaurants: {
    reducers: {
      updateRestaurants: 'updateRestaurants',
      // ...
    },
    effects: {
      loadRestaurants: 'loadRestaurants'
    }
  }
};
```

Notice that the plain text names correspond with the name of the registered reducer or effect. 

### Adaptations

Adaptations have their own slice of state and may define and register actions, reducers, effects, container views and views of their own. It's up to the app to decide that an adaptation is to be enabled, if it is, configuration will be reduced with a reducer that the adaptation registers like this:

```ts
updateConfiguration(state<ConfigurationState>, action: updateConfiguration) {
  return {
    // change the default configuration to point to my components
  };
}
this.adaptationRegistry.register('personalisedSearch' this.updateConfiguration);
```

## Bootstrap

When the app comes to life, regardless of the entry point, the user sees a default loading screen. The app loads adaptation config (from a gitignored `adaptations.json` in the root or from the innovation web service) which looks like this:

```json
{
  "adaptations": ["personalisedSearch"]
}
```

For each adaptation in the list, that adaptation's configuration reducer updates the configuration of the app. Once that's done, the app can present the appropriate container view for the entry point. 

In this way an adaptation is able to adapt any of the component parts of the app, or add entirely new ones. Where it's safe to do so, more than one adaptation may adapt the app at the same time.

## Runtime

The flow of state around the application is exactly the same as redux: state flows into subscribers, actions are dispatched and result in slices of state being reduced or in side effects and the dispatching of new actions. 

What's different is the way in which reducers or events that are interested in a certain action are found, in both cases the configuration is deferred to and the reducer or effect is retrieved from the registry.


[common adaptive architecture]: https://goo.gl/coMJHq
