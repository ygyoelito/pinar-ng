import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public title: string = 'Contador App';
  public numero: number = 0;
  public base: number = Math.floor(Math.random() * 10);

  acumular = (valor: number): void => {
    this.numero += valor;
  };

  randomNumber = (): void => {
    this.numero = Math.floor(Math.random() * 100);
    this.base = Math.floor(Math.random() * this.numero);
  };
}
