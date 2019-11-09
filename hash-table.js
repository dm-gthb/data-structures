class HashTable {
  constructor(length) {
    this.keymap = new Array(length);
  }

  _hash(key) {
    const HASH_RATE = 31;
    const HASH_STRING_LENGTH_LIMIT = 100;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, HASH_STRING_LENGTH_LIMIT); i++) {
      const char = key[i];
      const value = char.charCodeAt(0);
      total = (total * HASH_RATE + value) % this.keymap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keymap[index]) {
      this.keymap[index] = [];
    }
    this.keymap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keymap[index]) {
      for (const keymapCurrentElement of this.keymap[index]) {
        if (keymapCurrentElement[0] === key) {
          return keymapCurrentElement[1];
        }
      }
    }
    return null;
  }

  values() {
    const valuesArr = [];
    for (const keymapCurrentElement of this.keymap) {
      if (keymapCurrentElement) {
        for (const innerElement of keymapCurrentElement) {
          if (!valuesArr.includes(innerElement[1])) {
            valuesArr.push(innerElement[1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

const ht = new HashTable(100);
ht.set('white', '#fff');
ht.set('black', '#000');
console.log(ht);
