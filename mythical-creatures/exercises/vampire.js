class Vampire {
  constructor(name, pet, drink) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true || false;
    this.drank = 1;
  }
  drink() {
    if (this.drank > 0) {
    this.thirsty = false
    }
  }
}


module.exports = Vampire;
