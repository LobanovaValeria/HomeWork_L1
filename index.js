//Задание 1 – Создать объект workingObject всеми возможными способами;
const innerObject = {};
const middleArray = [1, 2, 3, innerObject];
const workingObject = {a: middleArray};
const workingObject2 = { a: [1, 2, 3, innerObject] };
const workingObject3={};
Object.assign(workingObject3, {a:middleArray});
const workingObject4=new Object();
workingObject4.a=middleArray;
const workingObject5={a: [1,2,3,{}]};
//console.log(workingObject,workingObject2,workingObject3,workingObject4,workingObject5);

//Задание 2 – Скопировать объект workingObject всеми возможными способами; 
const copyWorkingObject={...workingObject};
const copyWorkingObject2={};
Object.assign(copyWorkingObject2, workingObject);
const copyWorkingObject3=structuredClone(workingObject);
const copyWorkingObject4={};
for(let key in workingObject){
    copyWorkingObject4[key]=workingObject[key];
}
//console.log(copyWorkingObject,copyWorkingObject2,copyWorkingObject3, copyWorkingObject4);
//Задание 3 – На последних страницах лекции(в аттаче) есть функция makeCounter. Создать функцию makeCounter всеми описанными и возможными способами; 

//используем FD
function makeCounter() {
    let count=0;
    return function() {
       return count++;
    }
}
let counter=makeCounter();

//используем FE

let makeCounter2=function () {
    let count=0;
    return function() {
       return count++;
    }
}
let counter2=makeCounter2();

//arrow f
let makeCounter3=()=>{
    let count=0;
    return ()=>{
       return count++;
    }
}
let counter3=makeCounter3();

//NFD
let makeCounter4=function makeCounter_4() {
    let count=0;
    return function() {
       return count++;
    }
}
let counter4=makeCounter4();

// console.log(counter(),counter2(), counter3(), counter4());
// console.log(counter(),counter2(), counter3(), counter4());
// console.log(counter(),counter2(), counter3(), counter4());
// console.log(counter(),counter2(), counter3(), counter4());



//Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:
//если нужно просто строку развернуть, не предложения по словам, тогда 
function reverseStr(str) { 
    return str.split('').reverse().join('');
}
//console.log(reverseStr('abc'));

//задание на замыкание
function createIncrement() {
    let value = 0

    function increment(){
             value += 1;
             console.log(value)
    }

    let message = `Current value is ${value}`

    function log(){
       
             console.log(message)
    }
    
    return [increment, log];
}

const [increment, log] = createIncrement();
log() //"Current value is 0"        // почему не 3? 
//во-первых message объявлено через const, во-вторых изменение value замкнуто
//то есть никто, кроме внутр окр increment не в курсе , что value изменилось

//Задача на замыкание 2:

let group = getGroup();

group[0](); // 10 из-за того, что консоль лог не выз сразу  в итоге созр ссылка на пер i, а она в конце равна 10
group[5](); // 10 

function getGroup() {
  let students = [];
  let i = 0;
  while (i < 10) {
    students[i] = function() {
      console.log(i);
    }
    i++
  }

  return students;
}

//Задача на замыкание 3:

var globalVar = 'global';
var outerVar = 'outer';

function outerFunc(outerParam) {
    function innerFunc(innerParam) {
        console.log(globalVar, outerParam, innerParam); // guess,outer,inner
    }
    return innerFunc;
}

const x = outerFunc(outerVar); //ссылка на внутр ф
outerVar = 'outer-2';
globalVar = 'guess';
x('inner'); //здесь вызывается внутр ф



