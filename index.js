//1) Подобное бывает на срезе:
//Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму.
//Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").

//Объекты-хомяки должны иметь массив food для хранения еды и метод found, 
//который добавляет к нему еду.

//Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым 
//становится и второй тоже.

//В чём дело? Как поправить?

function Hamster() {  }

Hamster.prototype.food = [ ]; // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();
speedy.food=[]; //создаем живот отдельно для каждого
lazy.food=[];
speedy.found("яблоко");
speedy.found("орех");
console.log(speedy.food.length); // 2
console.log(lazy.food.length);   // 2 (!??) // должно быть 0

//2) Решить несколькими способами.

class Animal {
  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    // this.name = name;//можно использовать super.name или Animal.call(this.name)
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);

//3)
class A {
    constructor() {

    }

    arrFunc = () => {
        console.log('wtf', this === i) ;
    }
}

var i = new A();
i.arrFunc(); //wtf true - this устанавливается на объект, на котором вызывается

console.log(i.hasOwnProperty('arrFunc')); //true
// поясните ответ

//Создать приватное поле в функции-конструкторе, создать геттер и сеттер для него.

class withPrivet{
    #privateValue;
    constructor(value){
        this.#privateValue=value;
    }
    get value(){
        return this.#privateValue
    }
    set value(newValue){
        this.#privateValue=newValue;
    }
}
//2) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;


function sumTwoNumber(arr, total){
    let start1=0;
    let start2=1;
    let arrTotal=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[start1]+arr[start2]==total){
           return arrTotal = [arr[start1], arr[start2]];
        }else{
            start1++;
            start2++;
        }
    }
    
}
console.log(sumTwoNumber(arr, total));