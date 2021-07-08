import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html'
})
export class FizzbuzzComponent implements OnInit {

  dataArray: any[];
  hashTable: { d_by_3: number, d_by_5: number, d_by_3_and_5: number, rest: number };
  done: boolean;

  constructor() {
    this.dataArray = [];
    this.makeArray();
    this.hashTable = {
      d_by_3: 0,
      d_by_5: 0,
      d_by_3_and_5: 0,
      rest: 0
    };
    this.done = false;
  }

  ngOnInit() { }

  makeArray() {
    for (let i = 0; i < 100; i++) {
      this.dataArray.push(i + 1);
    }
  }

  makeFzBz() {
    if (!this.done) { // avoid working the data more than once on click
      for (let i = 0; i < this.dataArray.length; i++) {
        if (this.dataArray[i] % 5 === 0) {
          if (this.dataArray[i] % 3 === 0) {
            this.dataArray[i] = 'FizzBuzz';
            this.hashTable.d_by_3_and_5++;
          } else {
            this.dataArray[i] = 'Buzz';
            this.hashTable.d_by_5++;
          }
        } else if (this.dataArray[i] % 3 === 0) {
          this.dataArray[i] = 'Fizz';
          this.hashTable.d_by_3++;
        } else {
          this.hashTable.rest++;
        }
      }
      this.done = true;
    }
  }

}
