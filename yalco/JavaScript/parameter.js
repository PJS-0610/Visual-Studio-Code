function add(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(
  add(),
  add(1),
  add(1, 3)
);

function add(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log(
  '4.', add(1, 3, 5, 7)
);

function add(a, b) {
  for (const arg of arguments) {
    console.log(arg);
  }
  return a + b;
}

console.log(
  add(1, 3, 5, 7)
);

function getAverage() {
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result / arguments.length;
}

console.log(
  getAverage(1, 4, 7),
  getAverage(24, 31, 52, 80)
);

// π‘ νμμ μμ ν λ²μ 
function getAverage() {
  let result = 0, count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue;
    result += num;
    count++;
  }
  return result / count;
}

console.log(
  getAverage(2, 'κ°', 8, true, 5)
);

// β»οΈ μλ‘κ³ μΉ¨ ν μ€ν
add = (a, b) => a + b;
sub = (a, b) => a - b;
mul = (a, b) => a * b;
div = (a, b) => a / b;

function combineArms () {
  return (x, y) => {
    let result = x;
    for (const arm of arguments) {
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  }
}

const add_mul = combineArms(add, mul, 1, true);
const add_mul_sub = combineArms(add, mul, sub);
const add_mul_sub_div = combineArms(add, mul, sub, div);

// π‘ μ΅λͺ ν¨μ μ¬μ©λ¨
const add_mul_sub_div_pow
  = combineArms(add, mul, sub, div, (x, y) => x ** y);

  console.log(
    add_mul(8, 3),
    add_mul_sub(8, 3),
    add_mul_sub_div(8, 3),
    add_mul_sub_div_pow(8, 3)
  );