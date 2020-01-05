import "./styles.css";
/** 
 var AClass = function(){
   this.name = "ES5";

   this.sayHello = function(){
     return "I am "+this.name;
   }
 }

 class AClass{
   constructor(){
    this.name = "ES6";
   }

   sayHello(){
     const times = 3;
     const hiWord = "hey ";

     let hiPhrase = "";

     for(let i= 0; i< times; i++ ){
      hiPhrase += hiWord;
     }
    return hiPhrase+", I am "+this.name;
   }
 }*/
/*
 class AClass{
  constructor(){
   this.name = "ES6";
  }

  sayHello(){
    const hiWords = ["hey ", "hi ", "hello "];

    let hiPhrase = "";

    for(let i= 0; i< hiWords.length ; i++ ){
      const hiWord = hiWords[i];
     hiPhrase += hiWord;
    }

   return hiPhrase+", I am "+this.name;
  }
 }
 
 class AClass{
  constructor(){
   this.name = "ES6";
  }

  sayHello(){
    const hiWords = ["hey ", "hi ", "hello "];

    let hiPhrase = "";

    for(let hiWord of hiWords){
      hiPhrase += hiWord;
    }

   return hiPhrase+", I am "+this.name;
  }
}
 
 */

/*
 class AClass{
  constructor(){
   this.name = "ES6";
  }

  sayHello(){
    const hiWords = ["hey ", "hi ", "hello "];

    let hiPhrase = "";

    for(let hiWord of hiWords){
      hiPhrase += hiWord;
    }

   return `${hiPhrase}, I am ${this.name}`;
  }
}*/

/** 
class AClass{
  constructor(){
   this._name = "ES6";
  }

  get name(){
    return `${this._name}`;
  }

  set name(value){
    this._name = value;
  }
  sayHello(){
    const hiWords = ["hey ", "hi ", "hello "];

    let hiPhrase = "";

    for(let hiWord of hiWords){
      hiPhrase += hiWord;
    }

    let great = () => {return `${hiPhrase}, I am ${this.name}`}
   return great();
  }
}*/

class BaseClass {
  constructor() {
    this.familySecret = "Be yourself.";
  }
}
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
    let hiWords = ["hey ", "hi ", "hello "];
    hiWords = hiWords
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
