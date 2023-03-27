import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
})
export class GifsSearchComponent {
  
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>; //Non-null assertion operator (!)

  constructor(private gifsService:GifsService) {}

  search() {
    const valor = this.txtSearch.nativeElement.value;
    
    this.gifsService.searchGifs(valor);

    this.txtSearch.nativeElement.value = '';
  }
}
