//for media-item.component.html -> property binding uses []
//    -> event binding uses () -> angular pattern looks for the event name without the 'on' for native DOM elements (for example: you bind to the 'onDelete' element by leaving out the 'on')
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;             //this will tell Angular that we want it to support any property bindings placed on instances of the mw-media-item elements where the property name is mediaItem
                                                    // -> @Input('mediaItemToWatch') -> an alias for the property name (you can use it in app.component.html for ex.) -> avoid using it

  onDelete() {
    console.log('deleted');
  }
}
