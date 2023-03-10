class Bird {
  wings = 2;
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  swim () { console.log('수영중...'); }
}
class EmperorPenguin extends Penguin {
  size = 'XXXL';
}
const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();
console.log(birdy, eaglee, pengu, pengdol);
for (const i of [
  [ '1.', birdy instanceof Bird ],
  [ '2.', eaglee instanceof Bird ],
  [ '3.', eaglee instanceof Eagle ],
  [ '4.', pengdol instanceof Penguin ],
  [ '5.', pengdol instanceof Bird ],
  [ '6.', birdy instanceof Eagle ]
]) {
  console.log(i[0], i[1]);
}
pengu.swim();
pengdol.swim();
// eaglee.swim();


class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}
class YalcoChickenAndCafe extends YalcoChicken {
  cafeMenu = { '아메리카노': 4000, '라떼': 4500 };
  cafeOrder (name) {
    return `${this.cafeMenu[name]}원입니다.`
  }
}

const chain1 = new YalcoChickenAndCafe('서면', 2)
console.log(chain1);
console.log(
  chain1.order('후라이드'),
  chain1.cafeOrder('라떼')
);


class Bird1 {
  wings = 2;
  canFly = true;
  travel () { console.log('비행중...') }
}
class Eagle1 extends Bird1 {
  claws = 2;
}
class Penguin1 extends Bird1 {
  canFly = false;
  travel () { console.log('수영중...') }
}
const eaglee1 = new Eagle1();
const pengu1 = new Penguin1();
console.log(eaglee1);
eaglee1.travel();
console.log(pengu1);
pengu1.travel();


class YalcoChicken1 {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}
class YorkNannyYalcoChicken1 extends YalcoChicken1 {
  introduce () {
    return `또 뭐 쳐먹으러 기어들어왔어.`;
  }
  order (name) {
    return `${this.menu[name]}원이여.`
  }
}

const chain11 = new YorkNannyYalcoChicken1 ('종로', 48);
console.log(chain11.introduce());
console.log(chain11.order('양념치킨'));


class YalcoChicken2 {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}
class ConceptYalcoChicken2 extends YalcoChicken2 {
  #word = '';
  constructor (name, no, word) {
    super(name, no);
    this.#word = word;
  }
  introWithConcept () {
    return super.introduce() + ' ' + this.#word;
  }
  order (name) {
    return super.order(name) + ' ' + this.#word;
  }
}

const pikaChain = new ConceptYalcoChicken2('도봉', 50, '피카피카~');
console.log(pikaChain);
console.log(pikaChain.introWithConcept());
console.log(pikaChain.order('후라이드'));


class YalcoChicken11 {
  static brand = '얄코치킨';
  static contact () {
    console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
  }
}

class ConceptYalcoChicken11 extends YalcoChicken11 {
  static contact () {
    super.contact();
    console.log('컨셉 가맹문의는 홈페이지를 참조하세요.');
  }
}

ConceptYalcoChicken11.contact();