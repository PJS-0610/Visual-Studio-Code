
const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);

{
  const xx = 1; // ๐ก ๋ธ๋ก ์์์๋ ๋ฐ๊นฅ์ const ์ฌ์ ์ธ ๊ฐ๋ฅ
  let yy = '์๋ํ์ธ์~';

  console.log(xx, yy);
  // โ ๏ธ const, let์ ๋นผ๋จน์ผ๋ฉด ์ฌ์ ์ธ์ด ์๋๋ผ ๋ฐ๊นฅ๊ฒ์ ๊ฐ์(๋ณ์๋ฉด) ๋ฐ๊ฟ!
}

console.log(xx, yy);

let a = 0;
let b = 1;
let c = 2;
console.log('์์  1:', a, b, c);

{
  let a = 'A';
  let b = 'B'
  console.log('์์  2:', a, b, c);

  {
    let a = '๊ฐ'
    console.log('์์  3:', a, b, c);
  }

  console.log('์์  4:', a, b, c);
}

console.log('์์  5:', a, b, c);