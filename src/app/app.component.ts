import { Component } from '@angular/core';
import { WatchListService } from './watch-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  watchList = []
  maxToShow = 4;

  constructor(private watchListService: WatchListService){
  }
  
  ngOnInit(){
    this.watchListService.getWatchList()
        .subscribe(watchListData => {
          this.watchList = watchListData;
        })
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
