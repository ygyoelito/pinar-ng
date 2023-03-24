import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.css'],
})
export class AddCharComponent {
  @Input() newPjX: Character = {
    name: '',
    ability: 0,
  };

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  add() {
    if (this.newPjX.name.trim().length != 0 && this.newPjX.ability > 10) {
      this.onNewCharacter.emit(this.newPjX);
      
      this.newPjX = { name: '', ability: 0 };
    }
  }
}
