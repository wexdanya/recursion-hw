// написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
// кількість пар дорівнює прийнятому аргументу.
// якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок

// //pairBrickets(4) => '(((())))'
// //pairBrickets(-4) => '()'
// //pairBrickets('qwe') => throw

let result = [];
function pairBrickets(number) {
  if (typeof number === "string") {
    throw new TypeError("Must be number!");
  }
  result.push(")");
  result.unshift("(");
  if (number <= 0) {
    return console.log("()");
  }
  while (number !== 1) {
    return pairBrickets(number - 1);
  }
  return console.log(result.toString().replaceAll(",", ""));
}

try {
  pairBrickets(4);
  pairBrickets(-4);
  // pairBrickets("fdg");
} catch (error) {
  console.log(error);
}

///////////////////////////////////////////////

// написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих двох чисел
// // getDivider(24, 15) -> 3
// // getDivider(3, 3) -> 3
// // getDivider(7, 3) -> 1

// Алгоритм Евкліда дозволяє знайти НСД двох натуральних чисел.
// Суть алгоритму Евкліда – два числа порівнюють і від більшого віднімають менше до тих пір, поки числа не стануть рівними. Число, якому вони стануть рівними, і є їх найбільший спільний дільник.
// let counter;
let numberDividers = [];
let number2Dividers = [];
function getDivider(number, number2, count = number) {
  if (typeof number !== "number" || typeof number2 !== "number") {
    throw new TypeError("Must be number!");
  }
  if (number % count === 0) {
    numberDividers.push(count);
  }
  if (number2 % count === 0) {
    number2Dividers.push(count);
  }
  while (count !== 1) {
    return getDivider(number, number2, count - 1);
  }
  return numberDividers
    .filter((e) => number2Dividers.includes(e))
    .sort()
    .pop();
}
try {
  console.log(getDivider(15, 24));
} catch (error) {
  console.log(error);
}
