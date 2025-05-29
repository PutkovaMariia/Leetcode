/**
 * Make a Person
 */

export class Person {
  #firstName;

  #lastName;

  #fullName;

  constructor(fullName) {
    this.#fullName = fullName;
    [this.#firstName, this.#lastName] = fullName.split(' ');
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getFullName() {
    return this.#fullName;
  }

  setFirstName(first) {
    this.#firstName = first;
    this.#fullName = `${this.#firstName} ${this.#lastName}`;
  }

  setLastName(last) {
    this.#lastName = last;
    this.#fullName = `${this.#firstName} ${this.#lastName}`;
  }

  setFullName(firstAndLast) {
    this.#fullName = firstAndLast;
  }
}
