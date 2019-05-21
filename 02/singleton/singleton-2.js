/* --- example */

class SingletonClass {
  constructor(name = "") {
      if (!!SingletonClass.instance) {
          return SingletonClass.instance;
      }

      SingletonClass.instance = this;

      this.name = name;

      return this;
  }

  getName() {
      return this.name;
  }
}

/* --- test */

/* 
const instanceOne = new SingletonClass("One");
const instanceTwo = new SingletonClass("Two");
const instanceThree = new SingletonClass();

console.log(`Name of instanceOne is "${instanceOne.getName()}"`);
console.log(`Name of instanceTwo is "${instanceTwo.getName()}"`);
console.log(`Name of instanceThree is "${instanceThree.getName()}"`);
*/


/* --- bonus - extends */

class Extending extends SingletonClass {
  shoutName() {
      return this.name.toUpperCase();
  }
}

/*
const A = new Extending();

console.log("getName" in A);
console.log("shoutName" in A);
*/