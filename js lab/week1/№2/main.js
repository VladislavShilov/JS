"use strict";


console.log(typeof 11); // "number"
console.log(typeof "string"); // "string"
console.log(typeof true); // "boolean"


//min max safe numeric value
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

//min max possible numeric value.

// Именно такие числа, потому что они хранятся в 64 битах памяти.
// Если мы попытаемся прибавить к максимально безопасному числу 2,
// то ответ будет неверным из-за того, что число в двоичном виде выглядит не так, как ожидалось.
// В данном случае был придуман новый тип данных — Bigint.
// BigInt – это специальный числовой тип, который предоставляет возможность
 // работать с целыми числами произвольной длины.

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
