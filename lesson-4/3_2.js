const obj = {
  child: {
    i: 10,
    b: () => console.log(this.i, this),
    c() {
      console.log(this.i, this);
    },
  },
};

obj.child.b(); // undefined window
obj.child.c(); // 10 { i: 10, b: [Function: b], c: [Function: c] }

/* В "obj.child.b()", b — это стрелочная функция, а стрелочные функции не создают собственный this. В глобальном контексте this.i не определён, поэтому undefined. this будет глобальный объект (window в браузере, global в Node.js). */

/* 'c' - обычная функция и она берет this из объекта откуда была вызвана */
