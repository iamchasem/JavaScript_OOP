console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
      this.name = name;
      this.pets = pets;
      this.residence = residence;
      this.hobbies = hobbies;
  }

  addHobby(hobby){
      this.hobbies.push(hobby);
  }

  removeHobby(rmHobby){
    this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby);
  }

  greeting(){
      console.log("Hello, World!");
  }


  toString(){
    return Object.entries(this).toString();
  }
}



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);

    this.occupation = occupation;
  }

  greeting(){
    console.log("Hello, I'm a coder!");
  }
}




// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let coder = new Coder(
  "Chase",
   1, 
   "Sedona", 
   ["reading", "writting", "dancing"],
   "Full Stack Web Developer"
   );

coder.addHobby("tennis");

console.log(coder);

coder.removeHobby("dancing");

console.log(coder);

coder.greeting();

console.log(coder.toString());

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  
  result = 0;

  add(a, b){
    let res;

    if(b == undefined) {
      res = this.result + a;
    } else{
      res = a + b;
    }

    this.result = res;
    return this.result;
  }

  subtract(a, b){
    let res;

    if(b == undefined) {
      res = this.result - a;
    } else{
      res = a - b;
    }

    this.result = a - b;
    return this.result;
  }

  multiply(a, b){
    let res;
    
    if(b == undefined) {
      res = this.result * a;
    } else{
      res = a * b;
    }

    this.result = a * b;
    return this.result;
  }

  divide(a, b){
    let res;

    if(b == undefined) {
      res = this.result / a;
    } else{
      res = a / b;
    }

    this.result = a / b;
    return this.result;
  }

  display(){
    console.log(this.result);
  }
}

let calc = new Calculator();

calc.add(10);
calc.subtract(2);
calc.multiply(4);
calc.divide(2);
calc.display();



