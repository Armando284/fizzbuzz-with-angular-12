import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html'
})
export class FizzbuzzComponent implements OnInit {

  dataArray: any[];

  constructor() {
    this.dataArray = [];
    this.makeArray();
  }

  ngOnInit() { }

  makeArray() {
    for (let i = 0; i < 100; i++) {
      this.dataArray.push(i + 1);
    }
  }

  makeFzBz() {
    for (let i = 0; i < this.dataArray.length; i++) {
      if (this.dataArray[i] % 5 === 0) {
        if (this.dataArray[i] % 3 === 0) {
          this.dataArray[i] = 'FizzBuzz';
        } else {
          this.dataArray[i] = 'Buzz';
        }
      } else if (this.dataArray[i] % 3 === 0) {
        this.dataArray[i] = 'Fizz';
      }
    }
  }

}
