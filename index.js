//Задание 1 – Создать объект workingObject всеми возможными способами;
//Вариант 1
const workingObject_1 = {
  id: 1,
};
//Вариант 2
const workingObject_2 = new Object({ id: 1 });
//Вариант 3
const workingObject_3 = Object.create(null); // без прототипа
workingObject_3.id = 1;
//Вариант 4
const prototypeObject = { id: 1 };
const workingObject_4 = Object.create(prototypeObject); // c прототипом
//Вариант 5
const workingObject_5 = Object.create(Object.prototype, {
  a: { value: 1, writable: false, enumerable: true, configurable: true },
});
//Вариант 6
class WorkingObjectClass {
  constructor() {
    this.id = 1;
  }
}
const workingObject_6 = new WorkingObjectClass();
//Вариант 7
function WorkingObjectFunction() {
  this.id = 1;
}
const workingObject_7 = new WorkingObjectFunction();
//Вариант 8
const workingObject_8 = JSON.parse('{"id": 1}');
//Вариант 9
const workingObject_9 = new Map();
workingObject_9.set("id", 1);

/* console.log(workingObject_1);
console.log(workingObject_2);
console.log(workingObject_3);
console.log(workingObject_4.id);
console.log(workingObject_5);
console.log(workingObject_6);
console.log(workingObject_7);
console.log(workingObject_8);
console.log(workingObject_9); */

//------------------------------------------------------------------------------------------------------------------
//Задание 2 – Скопировать объект workingObject всеми возможными способами;
const workingObject = {
  id: 1,
};
//Вариант 1
const copy1 = Object.assign({}, workingObject);
//Вариант 2
const copy2 = { ...workingObject };
//Вариант 3
const copy3 = JSON.parse(JSON.stringify(workingObject));
//Вариант 4
const copy4 = structuredClone(workingObject);

/* console.log(copy1);
console.log(copy2);
console.log(copy3);
console.log(copy4); */

//------------------------------------------------------------------------------------------------------------------
//Задание 3 – На последних страницах лекции(в аттаче) есть функция makeCounter. Создать функцию makeCounter всеми описанными и возможными способами;
//Function Declaration
function makeCounter_1() {
  let count = 0;
  return function () {
    return count++;
  };
}
const counter_1 = makeCounter_1();
/* console.log(counter_1()); // 0
console.log(counter_1()); // 1 */

//Function Expression
const makeCounter_2 = function () {
  let count = 0;
  return function () {
    return count++;
  };
};
const counter_2 = makeCounter_2();
/* console.log(counter_2()); // 0
console.log(counter_2()); // 1 */

//Arrow Function
const makeCounter_3 = () => {
  let count = 0;
  return () => count++;
};
const counter_3 = makeCounter_3();
/* console.log(counter_3()); // 0
console.log(counter_3()); // 1 */

//Named Function Expression
const makeCounter_4 = function counter() {
  let count = 0;
  return function () {
    return count++;
  };
};
const counter_4 = makeCounter_4();
/* console.log(counter_4()); // 0
console.log(counter_4()); // 1 */

//Anonymous Function
const makeCounter_5 = function () {
  let count = 0;
  return function () {
    return count++;
  };
};
const counter_5 = makeCounter_5();
/* console.log(counter_5()); // 0
console.log(counter_5()); // 1 */

//Constructor Function
function Counter() {
  this.count = 0;
  this.next = function () {
    return this.count++;
  };
}
const counterInstance = new Counter();
/* console.log(counterInstance.next()); // 0
console.log(counterInstance.next()); // 1 */

// IIFE (Immediately Invoked Function Expression)
const makeCounter = (function () {
  let count = 0;
  return function () {
    return count++;
  };
})();
/* console.log(makeCounter()); // 0
console.log(makeCounter()); // 1 */

//------------------------------------------------------------------------------------------------------------------
//Задача на замыкание 1:
function createIncrement() {
  let value = 0;

  function increment() {
    value += 1;
    console.log(value);
  }

  const message = `Current value is ${value}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment(); // 1
increment(); // 2
increment(); // 3

log(); //"Current value is 0"        // почему не 3?

/* Когда вызываем increment(), значение value увеличивается, но переменная message не обновляется, т.к. она вычисляется один раз при создании функции. В функции log() всегда будет использоваться значение message, вычисленное при создании функции, поэтому выводит "Current value is 0" */

//------------------------------------------------------------------------------------------------------------------
//Задача на замыкание 2:
let group = getGroup();

group[0](); // 10
group[5](); // 10

function getGroup() {
  let students = [];
  let i = 0;
  while (i < 10) {
    students[i] = function () {
      console.log(i);
    };
    i++;
  }

  return students;
}

/* group[0]() и group[5]() будут выводить 10, поскольку функция захватывает не значение переменной i на момент создания, а ссылку на эту переменную. Т.е., когда позже вызываются эти функции, все они обращаются к финальному значению i=10 после завершения цикла */

//------------------------------------------------------------------------------------------------------------------
//Задача на замыкание 3:
var globalVar = "global";
var outerVar = "outer";

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam); // guess,outer,inner
  }
  return innerFunc;
}

const x = outerFunc(outerVar);
outerVar = "outer-2";
globalVar = "guess";
x("inner"); // guess outer inner

/* x('inner') выведет guess, outer, inner. 

globalVar = 'guess', т.к. это глобальная переменная и прямо перед вызовом функции она была изменена.

outerParam = 'outer'. Это значение, которое было передано при создании функции innerFunc в момент вызова outerFunc(outerVar). Это значение не изменется, несмотря на изменения в глобальной переменной outerVar.

innerParam — это значение, которое было передано при вызове функции x('inner'), т.е. 'inner'.*/

//------------------------------------------------------------------------------------------------------------------
//Бонус Задание 1 – Написать функцию глубокого сравнения двух обьектов:
const obj1 = {
  here: { is: "on", other: "3" },
  object: 5,
};

const obj2 = {
  here: { is: "on", other: "2" },
  object: 5,
};

const deepEqual = (obj1, obj2) => {
  // Если объекты одинаковы по ссылке или оба примитивные значения
  if (obj1 === obj2) return true;

  // Если один из объектов не объект или равен null
  if (!isObject(obj1) || !isObject(obj2)) return false;

  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  // Если количество ключей не совпадает
  if (objKeys1.length !== objKeys2.length) return false;

  // Проверка всех ключей и значений
  for (let key of objKeys1) {
    // Рекурсивно сравниваем значения ключей
    if (!objKeys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

// Функция для проверки, является ли переданный объект объектом (и не null)
const isObject = (object) => {
  return object != null && typeof object === "object";
};
console.log(deepEqual(obj1, obj2));

//------------------------------------------------------------------------------------------------------------------
//Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
  if (typeof str !== "string")
    return new Error("Переданное значение не является строкой!");
  return str.length <= 1 ? str : str.split("").reverse().join("");
}
console.log(reverseStr("Hello!"));
