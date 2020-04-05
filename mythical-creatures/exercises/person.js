class Person {
  constructor(name, victim) {
    this.name = name;
    this.stoned = false;
  }
  stare(victim) {
    return victim.stoned = true;
  }
}

module.exports = Person;
