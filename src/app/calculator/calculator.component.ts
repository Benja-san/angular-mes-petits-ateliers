import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  operators: string[] = ['+', '-', '*', '/'];
  operator: string = '';
  result: number = 0;
  constructor() {}
  ngOnInit(): void {}
  generateRandomNumber(number: number): void {
    if (number === 1) {
      this.firstNumber = Math.floor(Math.random() * 10);
    } else {
      this.secondNumber = Math.floor(Math.random() * 10);
    }
  }
  giveResult(operator: string): void {
    switch (operator) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;
      default:
        this.result = 0;
    }
  }
}
