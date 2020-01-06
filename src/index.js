import BaseClass, { allHiWords } from "./utils";
import "./styles.css";

class AClass extends BaseClass {
  constructor() {
    super();
    this._name = "ES6";
  }

  get name() {
    return `${this._name}`;
  }

  set name(value) {
    this._name = value;
  }
  sayHello() {
    let hiWords = allHiWords
      .filter(x => x.indexOf("he") == 0)
      .map(x => x.replace(" ", "o "));

    let hiPhrase = "";

    for (let hiWord of hiWords) {
      hiPhrase += hiWord;
    }

    let great = () => {
      return `${hiPhrase}, I am ${this.name}. ${this.familySecret}`;
    };
    return great();
  }
}

const instance = new AClass();
instance.name = "Francisco";

document.getElementById("app").innerHTML = instance.sayHello();
