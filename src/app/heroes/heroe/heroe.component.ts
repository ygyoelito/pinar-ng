import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 45;
  
  get NameCapitalized(): string {
    return this.name.toUpperCase();
  }

  getName = (): string => {
    return `${this.name} - ${this.age}`;
  }

  changeName = (): void => {
    const arr_name: string[] = ['Superman', 'Spiderman', 'Batman', 'Ironman']
    this.name = arr_name[Math.floor(Math.random() * arr_name.length)];
  }

  changeAge = (): void => {
    this.age = Math.floor(Math.random() * 100);
  }
}
