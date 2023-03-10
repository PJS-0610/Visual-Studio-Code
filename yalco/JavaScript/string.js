const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);

console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());


const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj = new String({a: 1});

console.log(typeof fromNum, fromNum);
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);
console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());

const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // π‘ [object Object]
const str5 = String([1, 2, 3]); // π‘ 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);


const word = 'Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
);
console.log(word);


function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
  areSameWords('Hello', 'hello'),
  areSameWords('κ°λλ€', 'κ°λλ€'),
  areSameWords('ABC', 'DEF')
);


console.log(
  'Hello World!'.charAt(0),
  'μλνμΈμ~'.charAt(2)
);


console.log(
  'μλνμΈμ~'.at(1),
  'μλνμΈμ~'.at(-1)
);


const word1 = 'λ°κ°μ΅λλ€!';
console.log (
  word1.indexOf('μ΅'),
  word1.lastIndexOf('μ΅')
);


const word2 = 'μλ, νλλ§λν κ±Έ μ νλ?';
console.log (
  word2.indexOf('νλ'),
  word2.lastIndexOf('νλ')
);


console.log(
  'κ°λλ€λΌλ§'.indexOf('ν'),
  'κ°λλ€λΌλ§'.lastIndexOf('ν')
);


const sentence = 'μλ μ νΈλμ΄ ν λ§λ¦¬κ° μ΄μμ΄μ.';
for (const word of ['μλ μ', 'νΈλμ΄', 'μ΄μμ΄μ.', 'λλ¬΄κΎΌ']) {
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('- - - - -');
}


console.log(
  'νλ£¨κ° 7λ² μ§λλ©΄ 1μ£ΌμΌμ΄ λλ κ±°μΌ.'.search(/[0-9]/),
  'νλ£¨κ° μΌκ³± λ² μ§λλ©΄ μΌμ£ΌμΌμ΄ λλ κ±°μΌ.'.search(/[0-9]/)
);


const word3 = 'ABCDEFGHIJKL';
const part = word3.substring(4, 8)
console.log(word3, part);


const word4 = 'ABCDEFGHIJKL';
console.log(
  word4.substring(4)
);


console.log(
  word4.substring(-1),
  word4.substring(4, 100),
  word4.substring(100)
);


const sentence1 = 'μλ μ νΈλμ΄ ν λ§λ¦¬κ° μ΄μμ΄μ.';

const firstWord = sentence1.substring(
  0, sentence1.indexOf(' ')
);
const lastWord = sentence1.substring(
  sentence1.lastIndexOf(' ') + 1, sentence1.length
);
console.log(firstWord, lastWord);


const word6 = 'ABCDEFGHIJKL';
console.log(
  word6.substring(4, 8),
  word6.slice(4, 8),
);


console.log(
  word6.substring(-4),
  word6.slice(-4)
);


const sentence2 = 'μλ μ νΈλμ΄ ν λ§λ¦¬κ° μ΄μμ΄μ.';

const firstWord2 = sentence2.slice(
  0, sentence2.indexOf(' ')
);

const lastWord2 = sentence2.slice(
  sentence2.lastIndexOf(' ') + 1 - sentence2.length
);
console.log(firstWord2, lastWord2);


console.log(
  '010-1234-5678'.split('-'),
  'ABC1DEF2GHI3JKL'.split(/[0-9]/)
)


const sentence11 = 'μλ μ νΈλμ΄ ν λ§λ¦¬κ° μ΄μμ΄μ.';
const splitted = sentence11.split(' ');
const firstWord11 = splitted[0];
const lastWord11 = splitted[splitted.length - 1];
console.log(firstWord11, lastWord11);


const word21 = '  Hello World!  ';
console.log(`--${word21}--`);
console.log(`--${word21.trim()}--`);
console.log(`--${word21.trimStart()}--`);
console.log(`--${word21.trimEnd()}--`);


const word22 = 'νΈμ΄';
console.log(word22.repeat(3));
console.log(word22.repeat(0));
console.log(word22.repeat());



const word33 = 'λ°₯ μ’ λ¨Ήμ, λ°₯. μ? μΌ, λ°₯ μ’ λ¨Ήμκ³  λ°₯, λ°₯!';
console.log(word33.replace('λ°₯', 'λΌλ©΄'));

console.log(word33.replace(/λ°₯/g, 'λΌλ©΄'));
console.log(word33.replaceAll('λ°₯', 'λΌλ©΄'));
console.log(word33.replaceAll(/λ°₯/g, 'λΌλ©΄'));