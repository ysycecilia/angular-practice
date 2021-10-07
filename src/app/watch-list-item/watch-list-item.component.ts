import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styles: [ 'i {cursor:pointer}' ]
})
export class WatchListItemComponent  {

  @Input() firstItem;
  @Input() lastItem;
  @Input() item;
  @Input() index;
 
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();


  ngOnInit() {
  }

  swapUp(source){
    this.up.emit();
  
  }
  
  swapDown(source){
    this.down.emit();
  }


}