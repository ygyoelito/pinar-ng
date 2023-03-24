import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  charactersR: Character[] = [
    {
      name: 'Goku',
      ability: 15000,
    },
    {
      name: 'Vegeta',
      ability: 7500,
    },
  ];

  newPjR: Character = {
    name: '',
    ability: 0,
  };

  addNewCharacter(arg: Character) {
    this.charactersR.push(arg);    
  }
}
