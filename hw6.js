//задание 1
Promise.reject('a')
  .catch((p) => p + 'b') //ab=>resolve
  .catch((p) => p + 'c') //пропускает (.catch принмает только reject)
  .then((p) => p + 'd') //abd=>resolve
  .then((p) => p + 'f') //abdf=>resolve
  .catch((p) => p + 'h') //пропускает (.catch принмает только reject)
  .finally((p) => p + 'e') //abdfe но игнориуется
  .then((p) => console.log(p)); //abdf

//задание2
console.log('1'); //синхронно

setTimeout(() => console.log('2'), 1); //макрозадача
let promise = new Promise((resolve) => {
  console.log('3'); //синхронно
  resolve();
});

promise.then(() => console.log('4')); //микрозадача

setTimeout(() => console.log('5')); //макрозадача

console.log('6'); //синхронно

//1
//3
//6
//4
//5
//2

//задача 3

setTimeout(() => console.log('a')); //макрозадача

Promise.resolve()
  .then((first) => {
    //микрозадача
    console.log('first', first);
    return 'b';
  })
  .then(
    Promise.resolve().then((second) => {
      console.log('second', second);
      return 'c';
    }),
  );

//first undefined
//second undefined
//a

//задача 4
let a = 5;
console.log(a); //синхронно

setTimeout(() => {
  //макрозадача
  console.log(a); //уже 15
  a = 10;
}, 0);

Promise.resolve().then(() => {
  //микрозадача
  console.log(a); //(все еще 5)
  a = 15;
});

console.log(a); //синхронно
//5
//5
//5
//15
//бонус задание
//Необходимо реализовать функцию fetchUrl. Принимает url, запрашивает данные, если всё ок,
//  возвращает промис с данными, если нет, то пытается снова и выкидывает промис с ошибкой только
// после 5 попыток.

let fetchUrl1='https://google/com&#39';

async function fetchUrl(url) {
  let count = 0;

  while (count < 5) {
    try {
      let res = await fetch(url);
      if (res.ok) {
        let response = await res.json();
        return response;
      }

    } catch (e) {
      count++;


      if (count === 5) {
        throw new Error('Превышено количество попыток');
      }
    }
  }
}
fetchUrl(fetchUrl1);

//или реализуем с помощью then catch

function fetchUrl2(url){
    let count = 0;
    return new Promise((resolve, reject)=>{
        const atFetch=()=>{
            fetch(url).then(res=>{
                if(res.ok){
                    return res.json();
                }
            })
            .then(res=>resolve(res.data))
            .catch(e=>{
                count++;
                if (count < 5) {
                    atFetch(url);
                }else{
                    reject(new Error('Превышено количество попыток')) ;

                  }
            })
           
        }
        atFetch(url);
    });

}
