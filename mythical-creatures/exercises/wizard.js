class Wizzard {
  constructor(traits) {
    this.name = 'Jhun';
    this.bearded = true;
    if (traits.bearded === false) {
      this.bearded = traits.bearded;
    }
    this.isRested = true;
    this.castingSpells = 0;
  }
  incantation(spell) {
    return spell.toUpperCase();
  }
  cast() {
    this.castingSpells++;
    if (this.castingSpells > 2) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } else {
      return 'MAGIC BULLET';
    }
  }
}

module.exports = Wizzard;
