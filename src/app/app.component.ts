import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fizzbuzz';
  clickCount = 0;

  ngOnInit() { }

  getBg() {
    return this.clickCount % 3;
  }

  changeBg() {
    this.clickCount++;
  }
}
