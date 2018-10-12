# CognitiveHealthUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

Communicates with backend server@: `http://localhost:9000/`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To Test

1. Go to : https://github.com/scottrbrtsn/cognitive-health-toolshed
2. Clone and run the toolshed. (requires maven: `mvn clean spring-boot:run`, also requires postgres to be running with a database created called `cognitive-health-toolshed`)
3. Run the development server `ng serve`
4. Look at the controllers to see the various endpoints to test.
5. Fill out a survey and verify data saved

## To Do

- Give user feedback on successful save of a survey.
- Create charts for survey trends over time.
- Update the chatbot to convert commented Angular 1.5 code to TS.  


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
