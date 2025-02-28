//1. Написать собственную реализацию методов массивов: some, reduce, map
//упрощенно так
function myReduce(arr, callback, initial) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Первый аргумент должен должен быть массивом');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('Второй аргумент должен должен являться фунцией');
  }
  let acc = initial;
  let startI = 0;
  if (initial === undefined) {
    if (arr.length === 0) {
      throw new TypeError('Невозможно выполнить при пустом массиве и без начального значения');
    }
    acc = arr[0];
    startI = 1;
  }

  for (let i = startI; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
}
console.log(myReduce([1,2,3], (acc, i)=>acc+i));

function myMap(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Первый аргумент должен должен быть массивом');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('Второй аргумент должен должен являться фунцией');
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}
console.log(myMap([1, 2, 3], x => x + 2));
//some пока не успела
//2.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
//что в консоли и в каком порядке? 3330123

Promise.resolve(1)
  .then((val) => {
    console.log(val); //1
    return val + 1;
  })
  .then((val) => {
    console.log(val); //2
  })
  .then((val) => {
    console.log(val); //undefined
    return Promise.resolve(3).then((val) => {
      console.log(val); //3
    });
  })
  .then((val) => {
    console.log(val); //undefined
    return Promise.reject(4);
  })
  .catch((val) => {
    console.log(val); //4
  })
  .finally((val) => {
    console.log(val); //undefined
    return 10;
  })
  .then((val) => {
    console.log(val); //undefined
  });
//что в консоли и в каком порядке? 1 2 undefined 3 undefined 4 undefined undefined

//4.
function F() {
  //?
}

const x = {};

F.prototype = x; //что тут происходит? зачем? это свойство ф конструктора, оно определяет прототип будущих
//объектов

const a = new F();

console.log(a.__proto__ === x); //true

//какой ответ? Почему? мы определи x как прототип для будущих объектов,
//далее спрашиваем у объекта a, кто его прототип и сравниваем с x
//так как это одна и та же ссылка сравнение дает true

//5.
const user = {
  name: 'Bob',
  funcFunc() {
    return function () {
      console.log(this);
    };
  },
  funcArrow() {
    return () => {
      console.log(this);
    };
  },
  arrowFunc: () => {
    return function () {
      console.log(this);
    };
  },
  arrowArrow: () => {
    return () => {
      console.log(this);
    };
  },
};

user.funcFunc()(); // global
user.funcArrow()(); // user
user.arrowFunc()(); // global
user.arrowArrow()(); // undefined

//6.
var a = 1;
var b = 2;

(function () {
  var b = 3; //у var ф обл видимости - лок переменная
  a += b; //а берется из глоб скоупа
})();

console.log(a); //4 - так как глоб пер изменила ф
console.log(b); //2 - ее не меняли
//что в консоли? почему так?
