import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  //@Input() characters:any = []
  @Input('data') characters: Character[] = []; //another way, see main-page.component.html
}
