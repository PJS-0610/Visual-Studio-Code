const food1 = {
  name: 'νλ²κ±°',
  price: 5000,
  vegan: false
};

console.log(food1);
console.log(
  food1.name, // π‘ λ§μΉ¨ν νλ‘νΌν° μ κ·Ό μ°μ°μ
  food1['price'] // π‘ λκ΄νΈ νλ‘νΌν° μ κ·Ό μ°μ°μ
);

// λΉ κ°μ²΄ μμ±
const food2 = {};
console.log(food2);
// νλ‘ν°νΌ μΆκ°
food2.name = 'μλ¬λ';
food2.price = '6000';
food2['vegan'] = true;
console.log(food2);

// νλ‘ν°νΌ μμ 
food2['price'] = '6500';
food2.vegan = false;
console.log(food2);

let idx = 0;
const  obj = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
}

console.log(obj);


const person1 = {
  name: 'νκΈΈλ',
  age: 24,
  school: 'νκ΅­λ',
  major: 'μ»΄ν¨ν°κ³΅ν'
};

console.log(person1);
delete person1.age;
console.log(person1);
delete person1['major'];
console.log(person1);
// π‘ μ€λ₯κ° λ°μνμ§λ μμ
delete person1.hobby;
console.log(person1);

const product1 = {
  name: 'λΈνΈλΆ',
  color: 'gray',
  price: 800000
}

function addModifyProperty (obj, key, value) {
  // obj.key = value; // β οΈ μλμ λ€λ₯Έ μμ μν
  obj[key] = value;
}
function deleteProperty (obj, key) {
  // delete obj.key // β οΈ μλμ λ€λ₯Έ μμ μν
  delete obj[key];
}
addModifyProperty (product1, 'inch', 16);
console.log(product1);
addModifyProperty (product1, 'price', 750000);
console.log(product1);
deleteProperty(product1, 'color');
console.log(product1);

function createProduct (name, price, quantity) {
  return { name, price, quantity };
}

const product3 = createProduct('μ νκΈ°', 50000, 50);
const product2 = createProduct('μ²­μκΈ°', 125000, 32);

console.log(product3, product2);


// μΌλ° ν¨μ νλ‘νΌν° μ μ
const person = {
  name: 'νκΈΈλ',

  salutate: function (formal) {
    return formal
    ? `μλνμ­λκΉ, ${this.name}μλλ€.`
    : `μλνμΈμ, ${this.name}μ΄μμ.`;
  }
}
console.log(person.salutate(true));

// β­οΈ λ©μλ μ μ
const person2 = {
  name: 'νκΈΈλ',
  
  salutate (formal) {
    return formal
    ? `μλνμ­λκΉ, ${this.name}μλλ€.`
    : `μλνμΈμ, ${this.name}μ΄μμ.`;
  }
}
console.log(person2.salutate(true));