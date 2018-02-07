# Consumer app web prototype

A prototype of the Just Eat web. Read the [narrative](https://goo.gl/TPobJD).

## Develop & test locally

### In VS Code for macOS

* Serve with `Cmd+Shift+B` (integrated terminal: ``Cmd+` ``)
* Debug in Chrome with `F5`(debugger: `Cmd+Shift+Y`)

### In the terminal

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Alterntively run `ng serve --open`.

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `npm run ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Deploy

Build first, then `gcloud app deploy --project mpd-proto`.
