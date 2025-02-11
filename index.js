// 6) Решить:  
console.log( "B" + "a" + (1 - "hello")); // BaNaN
console.log((true && 3) + "d"); // 3d
console.log(Boolean(true && 3) + "d"); // trued
console.log(NaN + 1) // NaN
console.log(NaN + 'o') // NaNo
console.log(undefined + 1) // NaN
console.log(undefined - 1) // NaN
console.log(null + 1) // 1
console.log(null / 5) // 0
console.log(5 / undefined) // NaN
console.log(-5 / null) //-Infinity 
console.log(null == 0) // false
console.log(null == '') // false
console.log(null > 0) // false 
console.log(null >= 0) // true
console.log(null == '') // false
console.log('foo' + + 'bar') // fooNaN
console.log('11' + '1' - 1) // 110
console.log(typeof Object) // function
console.log(typeof Math) // Object
console.log(new String('foo')=='foo') // true
console.log(new String('foo')==='foo') // false 

// 5) Написать по примеру создания примитивных значений (string, number, boolean, null, undefined, symbol, bigInt) (если знаете несколько способов - использовать все)
// String
let str1 = 'aaa';
let str2 = new String('aaa');
let str3 = 12 + ''; 
let str4 = 12..toString();
console.log(str1, str2, str3, str4);
// Number
let num1 = 12;           
let num2 = new Number(12);
let num3 = parseInt("12");
let num4 = parseFloat("12");
let num5 = +"12";
console.log(num1, num2, num3, num4, num5);
// Boolean
let bool1 = true;                
let bool2 = new Boolean(false);
let bool3 = !!12;
let bool4 = 12 === "12";
console.log(bool1, bool2, bool3, bool4);
// null
let nullValue = null;
console.log(nullValue);
// undefined
let undefinedValue;
console.log(undefinedValue);
// Symbol
let symbol1 = Symbol(198);
console.log(symbol1);
// BigInt
let bigInt1 = 1234n;
let bigInt2 = BigInt(123456789);
console.log(bigInt1, bigInt2);