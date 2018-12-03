import { Component } from "@angular/core";

@Component({
  selector: 'app',              //The selector property is what Angular will use to locate a custom HTML element, and apply the component too. (more later)
                                // -> there is an <app> cpmponent in index.html -> it will target that
  template: '<h1>My App</h1>'   //Will fill with this the targeted custom element's inner HTML when processed
})
export class AppComponent {}