import { Component } from '@angular/core';
import { WATCH_LIST } from './DATA';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  watchList = WATCH_LIST
  maxToShow = 4;
  ngOnInit(){
    
  }
  constructor() {
  }


  swapIndexUp(i){
    let temp = this.watchList[i];
    this.watchList[i] = this.watchList[i-1];
    this.watchList[i-1] = temp; 

  }

  swapIndexDown(i){
    let temp = this.watchList[i];
    this.watchList[i] = this.watchList[i+1];
    this.watchList[i+1] = temp; 
  }

  showAll(){
    this.maxToShow = this.watchList.length;
  }
}
