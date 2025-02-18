/* Реализуйте очередь с использованием массива. Имитируйте работу очереди на примере ожидания на кассе. */
class Queue {
  constructor() {
    this.people = [];
  }

  // Добавить элемент в очередь (в конец)
  push(element) {
    this.people.push(element);
  }

  // Удалить и вернуть первый элемент (из начала)
  pop() {
    return this.people.shift();
  }

  // Посмотреть первый элемент без удаления
  peek() {
    return this.isEmpty() ? "Очередь пуста" : this.people[0];
  }

  // Проверка, пуста ли очередь
  isEmpty() {
    return this.people.length === 0;
  }

  // Количество элементов в очереди
  size() {
    return this.people.length;
  }

  // Очистить очередь
  clear() {
    this.people = [];
  }
}

// Имитируем процесс, когда покупатели становятся в очередь
const queue = new Queue();
console.log(queue.isEmpty()); // Проверим, пуста ли очередь (true)
console.log(queue.peek()); // Проверим, кто сейчас на первом месте в очереди ("Очередь пуста")
queue.push("Илья"); // Первый человек стал в очередь
console.log(queue.peek()); // Проверим, кто сейчас на первом месте в очереди ("Илья")
queue.push("Лада"); // Лада встала в очередь
queue.push("Миша"); // Миша встала в очередь
console.log(queue.size()); // Получим количество людей в очереди (3)
console.log(queue.pop()); // Обслужим первого покупателя ("Илья")
console.log(queue.peek()); // Проверим, кто на первом месте после обслуживания ("Лада")
console.log(queue.size()); // Получим количество людей в очереди (2)
queue.clear(); // Касса закрылась
console.log(queue.size()); // Проверим количество людей в очереди (0)
