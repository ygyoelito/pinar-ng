import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    {
      name: 'Goku',
      ability: 15000,
    },
    {
      name: 'Vegeta',
      ability: 7500,
    },
  ];

  get chararacters():Character[] {
    return [...this._characters];
  }

  constructor() {}

  addCharacter( character:Character) {
    this._characters.push(character);
  }
}
