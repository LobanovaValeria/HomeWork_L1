//1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
//Массивы являются неправильными в JS, потому что соечают в себе несколько несколько структур.
//При этом в качестве значений могут выступать разные типы данных
//Массивы сочетают в себе как хеш-таблицы, так и список.Возможно, еще стэк и очередь.

//2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };
logger.call(obj);
logger.apply(obj);
logger.bind(obj)();

//3.1 this:
//* при решении задач имеет смысл рассуждать вслух. Прежде всего это касается срезов и собеседований. Это может помочь споткнуться на неправильном решении, не  даёт повиснуть тишине (скрадывает время для собеседующего) и позволяет вступить в диалог с интервьюером - иногда он может помочь развить мысль о решении или повернуть в нужную сторону.
const obj2 = {
  a: 1,
  e: (function () {
    return () => {
      console.log(this.a);
    };
  })(),
};
obj2.e(); //undefined
obj2.e.call({ a: 2 }); //undefined

//3.2 this:

const obj3 = {
    child: {
        i: 10,
        b: () => console.log(this.i, this),
        c() {
            console.log(this.i, this);
        },
    }
};

//obj3.child.b(); //undefined {}
//obj3.child.c(); //10 { i: 10, b: [Function: b], c: [Function: c] }

//3.3 this:

function foo() {
     const x = 10;
     return {
         x: 20,
         bar: () => {
             console.log(this.x);
         },
         baz: function () {
             console.log(this.x);
         }
     };
 }

 const obj4 = foo();
 console.log(obj4);
 obj4.bar(); // undefined
 obj4.baz(); // 20

 const obj5 = foo.call({ x: 30 });
 
 let y = obj5.bar; 
 let z = obj5.baz; 
 y();   // 30
 z();   // undefined
 
 obj5.bar();    //  30
 obj5.baz();    //  20

 //4.1 Массивы:

//- Создайте массив чисел и найдите его сумму разными способами.
let arr1=[0,1,2,3,4];
let sum1=0;
for(let i=0;i<arr1.length;i++){
    sum1+=arr1[i];
}
console.log(sum1);
let sum2=0;
arr1.forEach((item)=>{
    sum2+=item;
});
console.log(sum2);

let sum3=arr1.reduce((acc, item, arr)=>
    acc+item
,0);
console.log(sum3);

let sum4=0;
for(let num of arr1){
    sum4+=num;
}
console.log(sum4);
//- Создайте массив строк и объедините их в одну строку разными способами.
let arr=['a','b','c'];
let arrToStr1=arr.join('');
let arrToStr2='';
for(let i=0;i<arr.length;i++){
    arrToStr2+=arr[i];
}
let arrToStr3=arr.reduce((acc, i)=>acc+i,'');
let arrToStr4='';
for(let num of arr){
    arrToStr4+=num;
}
let arrToStr5='';
arr.forEach((item)=>arrToStr5+=item);
//- Найдите максимальный и минимальный элементы в массиве чисел разными способами.
let arr6=[1,2,3,4,5,4,3,1];
let max=Math.max.apply(arr6);
let min=Math.min.apply(arr6);
let sortArr=arr6.sort((a,b)=>a-b);
let min2=sortArr[0];
let max2=sortArr[sortArr.length-1];

//4.2 Stack (стек):

//- Реализуйте стек с использованием массива.
//- Не обязательно. По желанию можно попробовать пообходить дерево через стек.

