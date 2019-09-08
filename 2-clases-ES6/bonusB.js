"use strict";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    console.log(this.firstName, this.lastName);
  }
}
const person = new Person("Maricarmen", "García");

person.fullName;
