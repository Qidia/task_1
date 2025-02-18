/* Создайте массив чисел и найдите его сумму разными способами. */
const numbers = [1, 2, 3, 4, 5];

// for...of
let sum = 0;
for (const num of numbers) {
  sum += num;
}

// for
let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
  sumFor += numbers[i];
}

// forEach()
let sumForEach = 0;
numbers.forEach((num) => (sumForEach += num));

// reduce()
const sumReduce = numbers.reduce((acc, num) => acc + num, 0);

// do...while
let sumDoWhile = 0;
let count = 0;
do {
  sumDoWhile += numbers[count];
  count++;
} while (count !== numbers.length);

console.log(sum, sumFor, sumForEach, sumReduce, sumDoWhile);

/* Создайте массив строк и объедините их в одну строку разными способами. */
const words = ["A", "B", "C", "D"];

// join()
const joinedStr = words.join("");

// reduce()
const joinedReduce = words.reduce((acc, word) => acc + word);

// for...of
let joinedForOf = "";
for (const word of words) {
  joinedForOf += word;
}
joinedForOf = joinedForOf.trim();

// for
let joinedFor = "";
for (let i = 0; i < words.length; i++) {
  joinedFor += words[i];
}

// do...while
let joinedDoWhile = "";
let joinedCount = 0;
do {
  joinedDoWhile += words[joinedCount];
  joinedCount++;
} while (joinedCount !== words.length);

console.log(joinedStr, joinedReduce, joinedForOf, joinedFor, joinedDoWhile);

/* Найдите максимальный и минимальный элементы в массиве чисел разными способами. */
const numbersMaxMin = [1, 2, 8, 0, -1, -2, 5];

// Math.max и Math.min + spread-оператором
const max = Math.max(...numbersMaxMin);
const min = Math.min(...numbersMaxMin);

// sort
const sorted = [...numbersMaxMin].sort((a, b) => a - b);
const minSort = sorted[0];
const maxSort = sorted.at(-1);

// reduce
const maxReduce = numbersMaxMin.reduce(
  (max, num) => (num > max ? num : max),
  numbersMaxMin[0]
);
const minReduce = numbersMaxMin.reduce(
  (min, num) => (num < min ? num : min),
  numbersMaxMin[0]
);

// ForEach
let maxForEach = numbersMaxMin[0];
let minForEach = numbersMaxMin[0];

numbersMaxMin.forEach((num) => {
  if (num > maxForEach) maxForEach = num;
  if (num < minForEach) minForEach = num;
});

console.log(
  max,
  min,
  maxSort,
  minSort,
  maxReduce,
  minReduce,
  maxForEach,
  minForEach
);
