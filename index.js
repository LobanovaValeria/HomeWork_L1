// Написать по примеру создания примитивных значений (string, number, boolean, null, undefined, symbol, bigInt) (если знаете несколько способов - использовать все)
//string
var str1='строка';
let str2='строка';
const STR3='строка';
let str=String(5);
//number
var num1=5;
let num2=5;
const NUM3=5;
let num4=parseInt('5', 10);
let num5=parseFloat('5.5');
let num6=Number('10')
//boolean
var bool1=true;
let bool2=true;
let bool3=3<2;
const BOOL4=true;
let bool5=Boolean(0);
//null
var null1=null
let null2=null;
const NULL3=null;
//undefined
var un1=undefined;
let un2=undefined;
const UN3=undefined;
//symbol
var sym1=Symbol(2);
let sym2=Symbol(2);
let sym3=Symbol('Sym');
const SYM4=Symbol('Sym4');
//bigInt
var bInt1=12n;
let bInt2=12n;
const BINT3=12n;

//решить
console.log( "B" + "a" + (1 - "hello")); //"BaNaN"
console.log((true && 3) + "d"); //"3d"
console.log(Boolean(true && 3) + "d"); //"trued"
console.log(NaN + 1) //NaN
console.log(NaN + 'o') //"NaNo"
console.log(undefined + 1) //NaN
console.log(undefined - 1) //NaN
console.log(null + 1) //1
console.log(null / 5) //0
console.log(5 / undefined) //NaN
console.log(-5 / null) //-Infinity
console.log(null == 0) //false
console.log(null == '') //false
console.log(null > 0) //false
console.log(null >= 0) //true
console.log(null == '') //false
console.log('foo' + + 'bar') //"fooNaN"
console.log('11' + '1' - 1) //110
console.log(typeof Object) //function
console.log(typeof Math) //object
console.log(new String('foo')=='foo') //true
console.log(new String('foo')==='foo') //false

//PR?
