class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () { // π‘ λ©μλ
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  }
}
const chain1 = new YalcoChicken('νκ΅', 3);
const chain2 = new YalcoChicken('κ°λ¨', 17);
const chain3 = new YalcoChicken('μ μ£Ό', 24);
console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

class Person {
  constructor (name, age, married = false) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
}

const person1 = new Person('λ°μν¬', 30, true);
const person2 = new Person('μ€λμ', 18);
console.log(person1, person2);
// μΈμ€ν΄μ€ μ΄κΈ°νκ° νμμλ ν΄λμ€
class Empty {}
console.log(new Empty());

class Dog {
  bark () {
    return 'λ©λ©';
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark());

function Dog2 () {
  this.bark = function () {
    return 'λ©λ©';
  }
}
const badug = new Dog2();
console.log(badug, badug.bark());

// νλκ°μ΄ μ§μ λμ΄ μμΌλ―λ‘ constructor λ©μλ νμμμ
class Slime {
  hp = 50;
  op = 4;
  attack (enemy) {
    enemy.hp -= this.op;
    this.hp += this.op/4;
  }
}
const slime1 = new Slime();
const slime2 = new Slime();

console.log(slime1, slime2);
slime1.attack(slime2);
console.log(slime1, slime2);

class YalcoChicken1 {
  no = 0;
  menu = { 'νλΌμ΄λ': 10000, 'μλμΉν¨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  }
  order (name) {
    return `${this.menu[name]}μμλλ€.`
  }
}
const chain0 = new YalcoChicken1('(λ―Έμ )');
console.log(chain0, chain0.introduce());
const chain12 = new YalcoChicken1('νκ΅', 3);
console.log(chain12, chain12.introduce());
chain12.menu['μλμΉν¨'] = 13000;

console.log(chain0.order('μλμΉν¨'), chain12.order('μλμΉν¨'));

class YalcoChicken2 {

  // μ μ  λ³μμ λ©μλ
  static brand = 'μμ½μΉν¨';
  static contact () {
    return `${this.brand}μλλ€. λ¬΄μμ λμλλ¦΄κΉμ?`;
  }

  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  }
}

console.log(YalcoChicken2);
console.log(YalcoChicken2.contact());


class Do1g {
  bark () {
    return 'λ©λ©';
  }
}

console.log(typeof Do1g);
const κ° = Do1g; // ν λΉλ  μ μλ μΌκΈ κ°μ²΄
const λ°λμ΄ = new κ°();

console.log(λ°λμ΄); // π‘ μ½μμ λνλ νμ νμΈ