import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroes: string[] = [
    'Hulk',
    'Thor',
    'Superman',
    'Spiderman',
    'Batman',
    'Ironman',
    'Capitan America',
  ];
  randomDeleted: string = '';

  deleteRandomHero = (): void => {
    const [deleted] = this.heroes.splice(Math.floor(Math.random() * this.heroes.length), 1);    
    this.randomDeleted = deleted || '';  
  }

}
