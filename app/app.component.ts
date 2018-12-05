//for app.component.html
// -> [mediaItem]="firstMediaItem" -> In this syntax, the mediaItem, which is the input property from the mediaItem component, is the binding target, because it's on the left of the equal sign. 
//The first mediaItem property from the app component is the binding source, which is to the right of the equal sign.

import { Component } from "@angular/core";

@Component({
  selector: 'mw-app',           //The selector property is what Angular will use to locate a custom HTML element, and apply the component too. (more later)
                                // -> there is an <app> cpmponent in index.html -> it will target that
                                //only loads on the first element it finds -> out of multiple <app> elements only one gets selected
                                //mw (media watch) -> recommended to use a prefix (and at least one '-')
  templateUrl: 'app/app.component.html',  //Will fill with this the targeted custom element's inner HTML when processed
                                          //' vs ` -> ` supports multiple lines
                                          //templateUrl -> specify a file that contains the template
  styleUrls: ['app/app.component.css']    //add css
                                          //takes an array of string
                                          //stylesUrl also takes array
})
export class AppComponent {
  firstMediaItem = {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
  };
}
