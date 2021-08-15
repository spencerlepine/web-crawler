class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
    this.count = 0;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    var result = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index--;
    this.count--;
    return result;
  };

  push(value) {
    this.storage[this.index] = value;
    this.index++;
    this.count++;
  };

  size() {
    return this.count;
  }
};

export default Stack;
