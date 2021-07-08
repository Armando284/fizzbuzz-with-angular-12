import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzComponent } from './fizzbuzz.component';

describe('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FizzbuzzComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#makeArray() should fill #dataArray with 100 elements', () => {
    const fbz = new FizzbuzzComponent();
    expect(fbz.dataArray.length()).toBe(0, 'null at first');
    fbz.makeArray();
    expect(fbz.dataArray.length()).toBe(100, 'null at first');
  });

  it('#makeFzBz() should change output divisible by 3 by string #"Fizz"', () => {
    const fbz = new FizzbuzzComponent();
    fbz.makeFzBz();
    expect(fbz.dataArray[2]).toMatch('Fizz', 'divisible by 3 changed to "Fizz"');
    expect(fbz.dataArray[5]).toMatch('Fizz', 'divisible by 3 changed to "Fizz"');
    expect(fbz.dataArray[26]).toMatch('Fizz', 'divisible by 3 changed to "Fizz"');
    expect(fbz.dataArray[65]).toMatch('Fizz', 'divisible by 3 changed to "Fizz"');
    expect(fbz.dataArray[68]).toMatch('Fizz', 'divisible by 3 changed to "Fizz"');
    expect(fbz.dataArray[98]).toMatch('Fizz', 'divisible by 3 changed to "Fizz"');
  });

  it('#makeFzBz() should change output divisible by 5 by string #"Buzz"', () => {
    const fbz = new FizzbuzzComponent();
    fbz.makeFzBz();
    expect(fbz.dataArray[4]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[9]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[19]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[49]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[64]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[99]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
  });

  it('#makeFzBz() should change output divisible by 3 and 5 by string #"FizzBuzz"', () => {
    const fbz = new FizzbuzzComponent();
    fbz.makeFzBz();
    expect(fbz.dataArray[14]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[29]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[59]).toMatch('Buzz', 'divisible by 3 changed to "Buzz"');
  });

  it('#makeFzBz() output not divisible by 3 and 5 should stay as numbers', () => {
    const fbz = new FizzbuzzComponent();
    fbz.makeFzBz();
    expect(fbz.dataArray[1]).toBe(2, 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[25]).toBe(26, 'divisible by 3 changed to "Buzz"');
    expect(fbz.dataArray[71]).toBe(72, 'divisible by 3 changed to "Buzz"');
  });
});
