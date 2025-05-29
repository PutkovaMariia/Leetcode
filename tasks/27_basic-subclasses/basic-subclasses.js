/**
 * Basic subclasses
 */

export class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

export class Man extends Human {
  constructor() {
    super('Adam', 'male');
  }
}

export class Woman extends Human {
  constructor() {
    super('Eve', 'female');
  }
}

export class God {
  static create() {
    return [new Man(), new Woman()];
  }
}
