//for media-item.component.html -> property binding uses []
//    -> event binding uses () -> angular pattern looks for the event name without the 'on' for native DOM elements (for example: you bind to the 'onDelete' element by leaving out the 'on')
//    -> structure directive -> changes the DOM (fe: ngIf)
//    -> *ngIf -> the '*' is shorthand for <ng-template [ng-if]="mediaItem.watchedOn"></ng-template> -> it lets us to put the ngIf directly on the element
//          -> ng-template is handled by angular, won't be part of the DOM

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;             //this will tell Angular that we want it to support any property bindings placed on instances of the mw-media-item elements where the property name is mediaItem
                                                    // -> @Input('mediaItemToWatch') -> an alias for the property name (you can use it in app.component.html for ex.) -> avoid using it

  @Output() delete = new EventEmitter();               //Output -> make (expose) an event binding for the components -> alias is also supported (shouldn't be used)

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
