// ๐ก ๋ณ์์ด๋ฏ๋ก let์ด ์ฌ์ฉ๋จ
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log(x, y);
}

//๋ฌดํ๋ฃจํ
// let x = 0;

// for (;;) {
//   console.log(x);
// }

// console.log('์ถ๋ ฅ ์๋จ');


const lunch = {
  name: '๋ผ๋ฉด',
  taste: '๋งค์ด๋ง',
  kilocalories: 500,
  cold: false
}

for (const key in lunch) { // ๐ก ๋ณํ  ๊ฒ์ด ์๋๋ฏ๋ก const ์ฌ์ฉ
  console.log(key, ':', lunch[key])
}

const list = [1, '๊ฐ๋๋ค', false, null];

for (const item of list) {
  console.log(item);
}
// ๋ฌธ์์ด ์ญ์ ์ดํฐ๋ฌ๋ธ์ด๋ฏ๋ก ์ฌ์ฉ ๊ฐ๋ฅ
for (const letter of '์๋ํ์ธ์~') {
  console.log(letter);
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // โ ๏ธ ๋ณต์ฌ๋ ๊ฐ. let ์ฌ์ฉ ์ฃผ๋ชฉ
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);



//continue ๋ฃจํ๋ฅผ ๊ฑด๋๋
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log('for ๋ฃจํ ์ข๋ฃ');


//break ์ข๋ฃํ๊ณ  ๋น ์ ธ๋์ด
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log('for ๋ฃจํ ์ข๋ฃ');

//label ์ค์ฒฉ๋ ๋ฐ๋ณต๋ฌธ์ ๋ช๋ชํ์ฌ continue or break์ ์ฌ์ฉ
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}