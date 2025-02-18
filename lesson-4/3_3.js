function foo() {
  const x = 10;
  return {
    x: 20,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}

const obj1 = foo();
obj1.bar(); // undefined (this взят из foo)
obj1.baz(); // 20 (this будет obj1. В obj1 есть x: 20, поэтому this.x === 20)

const obj2 = foo.call({ x: 30 });

let y = obj2.bar;
let z = obj2.baz;
y(); // 30 (Стрелочная функция bar наследует this от foo, т.е. { x: 30 })
z(); // undefined (остаётся обычной функцией)

obj2.bar(); // 30 (Стрелочная функция, this уже привязан к { x: 30 } из foo.call({ x: 30 })
obj2.baz(); // 20 (обычная функция. this в момент вызова будет obj2, а в obj2 x: 20)
