const now = new Date();

console.log(typeof now);
console.log(now);
const nowStr = Date()
console.log(typeof nowStr);
console.log(nowStr);

console.log(
  new Date(0)
);
console.log(
  new Date(1000 * 60 * 60 * 24 * 365 * 30)
);

console.log(
  new Date(2022, 8)
);

console.log(
  new Date(2022, 8, 20, 14, 35)
);

console.log(
  new Date(2022, 8, 20, 14, 35, 47, 789)
);

console.log(
  new Date('August 20, 2022 14:35:47')
);

console.log(
  new Date('2022-08-20T14:35:47')
);

console.log(Date.now());

console.log(
  // π‘ μμ€ν(μ€ν μ»΄ν¨ν°) μκ°μ΄ νκ΅­μ΄λ©΄ μμ°¨ 9μκ° μ μ©
  Date.parse('August 20, 2022 09:00:00')
);

const now1 = new Date();
console.log(
  now1.toString()
);
console.log(
  now1.toDateString()
);
console.log(
  now1.toTimeString()
);

const now2 = new Date();
console.log(
  now2.toString()
);
console.log(
  now2.toLocaleString()
);
console.log(
  now2.toLocaleString('ko-KR')
);
console.log(
  now2.toLocaleString('en-US')
);
console.log(
  now2.toLocaleString('de-DE')
);

const now3 = new Date();
console.log(now3.toString());
for (i of [
  [ 'μ°:', now3.getFullYear() ],
  [ 'μ:', now3.getMonth() ], // 0 ~ 11
  [ 'μΌ:', now3.getDate() ],
  [ 'μμΌ:', now3.getDay() ], // 0λΆν° μΌμνμλͺ©κΈν  
  [ 'μ:', now3.getHours() ],
  [ 'λΆ:', now3.getMinutes() ],
  [ 'μ΄:', now3.getSeconds() ],
  [ 'λ°λ¦¬μ΄:', now3.getMilliseconds() ]
]) {
  console.log(i[0], i[1]);
}

const now4 = new Date();
console.log(now4.toString());
now4.setFullYear(2022);
now4.setMonth(7);
now4.setDate(20);
// π‘ μμΌμ setterκ° μμ
now4.setHours(14);
now4.setMinutes(35);
now4.setSeconds(47);
now4.setMilliseconds(789);
console.log(now4.toString());


const now5 = new Date();

const year = now5.getFullYear();
const month = now5.getMonth() + 1;
const date = now5.getDate();
const day = 'μΌμνμλͺ©κΈν '[now5.getDay()];
console.log(
  `μ€λμ ${year}λ ${month}μ ${date}μΌ, ${day}μμΌμλλ€.`
);

//λ°λ¦¬μ΄ μ«μκ°μ set/get
const date1 = new Date(2020, 7, 20);
const date1value = date1.getTime();
console.log(date1.toString());
console.log(date1value);
const date2 = new Date();
console.log(date2.toString());
date2.setTime(date1value);
console.log(date2.toString());

//UTCμ μκ°μ°¨λ₯Ό λΆ λ¨μλ‘ λ°ν(νκ΅­μ κ²½μ° 9μκ°)
console.log(
  new Date().getTimezoneOffset() / 60
);

//ISO 8061μ΄λ νμμ λ¬Έμμ΄ λ°ν
const now6 = new Date();
// μκ°μ°¨ μ‘΄μ¬
console.log(
  now6.toISOString()
);
console.log(
  now6.toString()
);


const now11 = new Date();
const timezoneOffset = now11.getTimezoneOffset() * 60000;
const isoStr = new Date(now11.getTime() - timezoneOffset).toISOString();
console.log(isoStr);
console.log(now11.toString());