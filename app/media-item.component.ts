//for media-item.component.html -> property binding uses []
//    -> event binding uses () -> angular pattern looks for the event name without the 'on' for native DOM elements (for example: you bind to the 'onDelete' element by leaving out the 'on')
import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  onDelete() {
    console.log('deleted');
  }
}
