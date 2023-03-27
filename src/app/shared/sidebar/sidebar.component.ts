import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get historyTerms () {
    return this.gifsService.history;
  }

  constructor(private gifsService:GifsService) {}

  searchByItem(item:string) {
    this.gifsService.searchGifs(item);    
  }
}
