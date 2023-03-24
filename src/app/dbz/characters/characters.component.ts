import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  //@Input() characters: Character[] = [];

  get characters() {
    return this.DbzService.chararacters;
  }

  constructor (private DbzService: DbzService) {}
}
