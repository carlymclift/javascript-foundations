class Dragon {
  constructor(name) {
    this.name = name;
    this.rider = 'Eragon';
    this.color = 'blue';
    this.hungry = true;
    this.food = 0;
  }
  eat() {
    if (this.food === 2) {
      return this.hungry = false;
    }
    this.food++;
  }
}

module.exports = Dragon;
