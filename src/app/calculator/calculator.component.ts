import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  @ViewChild('num1') number1:any;
  @ViewChild('num2') number2:any;
  
  result:any = 0;
  constructor() { }

  ngOnInit() {
  }

  calc() {
    let num1 = parseInt(this.number1.nativeElement.value);
    let num2 = parseInt(this.number2.nativeElement.value);
    this.result = num1 + num2;
  }

}
