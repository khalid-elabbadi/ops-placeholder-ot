# What does this module do exactly ?
As you know the html placeholder disappears once you start typing. That's cool but sometimes we need it to stay visible to guide the user while typing a RIB or a phone number for example. You can combine this module with another masking module to get better user experience

# Demo
This module render this

![Module preview](docs/preview.png)

# Installing
```bat
$ npm install --save ops-placeholder-ot
```

# Quickstart

Import ops-placeholder-ot module in Angular app.

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OpsPlaceholderOtModule } from 'projects/ops-placeholder-ot/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    OpsPlaceholderOtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
```
Then, just define this element in a wrapper div or element with your input to placeholder like this:

Usage
```html
<div class="demo-wrapper" style="position: relative">
  <input type="text" [(ngModel)]="value" #ribInput>
  <ops-placeholder-ot [elementRef]="ribInput" [visibleOnlyOnValue]="true" placeholder="123456789" >
  </ops-placeholder-ot>
</div>
```

# Options
``[elementRef]`` html input element ref

``[placeholder]`` placeholder to keep visible on taping

``[visibleOnlyOnValue]`` eighter to show the placeholder only if user tape at least one character or show it in the first shot

# Stuffs for contributors

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project ops-placeholder-ot` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ops-placeholder-ot`.
> Note: Don't forget to add `--project ops-placeholder-ot` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ops-placeholder-ot` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ops-placeholder-ot`, go to the dist folder `cd dist/ops-placeholder-ot` and run `npm publish`.

## Running unit tests

Run `ng test ops-placeholder-ot` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
