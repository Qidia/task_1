Function.prototype.mybind = function (context, ...initialArgs) {
  // Проверка, что "this" является функцией
  if (typeof this !== "function") {
    throw new TypeError("mybind должно быть вызвано на функции");
  }

  const fn = this; // Ссылаемся на функцию, к которой привязываем контекст

  return function (...laterArgs) {
    // Вызов исходной функции с контекстом и всеми аргументами
    fn.apply(context, [...initialArgs, ...laterArgs]);
  };
};

let printN = function (city) {
  console.log(`${this.fN} ${this.lN} ${city || ""}`);
};

let name = {
  fN: "Mickey",
  lN: "Mouse",
};

let printBind = printN.bind(name, "Entenhausenn");
printBind(); // Mickey Mouse Entenhausenn

let printMyBind = printN.mybind(name, "Entenhausenn");
printMyBind(); // Mickey Mouse Entenhausenn
