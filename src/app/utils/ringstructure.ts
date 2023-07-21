export class ringStructure {
  currentValue: number;

  constructor(initialValue: number) {
    this.currentValue = initialValue;
  }

  next() {
    if (this.currentValue == 3) {
      this.currentValue = 1;
    } else {
      this.currentValue++;
    }
  }

  prev() {
    if (this.currentValue == 1) {
      this.currentValue = 3;
    } else {
      this.currentValue--;
    }
  }

  getValue(): number {
    return this.currentValue;
  }
}
