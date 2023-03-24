import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.css'],
})
export class AddCharComponent {
  @Input() newPj: Character = {
    name: '',
    ability: 0,
  };

  constructor(private dbzService:DbzService) {}

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  add() {
    if (this.newPj.name.trim().length != 0 && this.newPj.ability > 10) {
      //this.onNewCharacter.emit(this.newPjX);

      this.dbzService.addCharacter(this.newPj);

      this.newPj = { name: '', ability: 0 };
    }
  }
}
