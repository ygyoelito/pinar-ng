import { Component } from '@angular/core';
import { Gif } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-result',
  templateUrl: './gifs-result.component.html',
})
export class GifsResultComponent {
  
  get results():Gif[] {
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsService) {}
}