class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false
    this.hasRing = (this.name === 'Frodo') || false;
  }
  celebrateBirthday() {
    this.age++
    if (this.age > 32 && this.age < 101) {
      return this.adult = true;
    } else if (this.age > 100) {
      return this.old = true;
    }
  }
}

module.exports = Hobbit;
