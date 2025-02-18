//Реализуйте стек с использованием массива.
class Stack {
  constructor() {
    this.items = [];
  }

  // Добавить элемент в стек
  push(value) {
    this.items.push(value);
  }

  // Удалить и вернуть верхний элемент
  pop() {
    return this.items.pop();
  }

  // Проверка, пуст ли стек
  isEmpty() {
    return this.items.length === 0;
  }

  // Количество элементов в стеке
  size() {
    return this.items.length;
  }

  // Очистить стек
  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.isEmpty()); // false
console.log(stack.size()); // 3

console.log(stack.pop()); // 3
console.log(stack.size()); // 2

stack.clear();
console.log(stack.size()); // 0
