'use strict'

// ПОВТОР Рекурсия //

// Дан массив:
// С помощью рекурсии выведите элементы этого массива в консоль.

// let arr = ['a', 'b', 'c', 'd'];
// function func (arr) {
// 	console.log(arr.shift());
// 	if (arr.length !== 0) {
// 		func(arr);
// 	}
// }
// func(arr);

// Дан массив:
// С помощью рекурсии найдите сумму квадратов элементов этого массива.

// let arr = [1, 2, 3, 4, 5];
//
// function getSum (arr) {
// 	let sum = arr.shift();
// 	if (arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
// 	return sum;
// }
// let result = getSum(arr);
// console.log(result);

// Дан многомерный объект произвольного уровня вложенности, например, такой:
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.

// let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } }
//
// function rekFunc (obj) {
// 	for (const key in obj) {
// 		if (typeof obj[key] === 'object') {
// 			rekFunc(obj[key]);
// 		} else {
// 			console.log(obj[key])
// 		}
// 	}
// }
//
// rekFunc(obj)

// Дан многомерный массив произвольного уровня вложенности, например, такой:
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
// 	[1, 2, 7, 8, 3, 4, 5, 6, 7]

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// let arr2 = [];
// function getArr (arr) {
// 	for (const el of arr) {
// 		if (typeof el === 'object') {
// 			getArr(el);
// 		} else {
// 			arr2.push(el)
// 		}
// 	}
// }
// getArr(arr);
// console.log(arr2);

// Дан многомерный объект произвольного уровня вложенности, например, такой:
// С помощью рекурсии найдите сумму элементов этого объекта.
// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
//
// function getObj (obj) {
// 	let sumKeyObj = 0;
// 	for (const key in obj) {
// 		if (typeof obj[key] === 'object') {
// 			sumKeyObj += getObj(obj[key]);
// 		} else {
// 			sumKeyObj += obj[key]
// 		}
// 	}
// 	return sumKeyObj;
// }
// let result = getObj(obj)
// console.log(result);

// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 	'abcdefgjk'

// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// let str = '';
// function getArr (arr) {
// 	for (const el of arr) {
// 		if (typeof el === 'object') {
// 			getArr(el)
// 		} else {
// 			str += el;
// 		}
// 	}
// 	return str;
// }
// getArr(arr);
// console.log(str);

// Дан многомерный массив произвольного уровня вложенности, например, такой:
// Возведите все элементы-числа этого массива в квадрат.
// let arr2 = []
// function getArr (arr) {
// 	for (const el of arr) {
// 		if (typeof el === 'object') {
// 			getArr(el);
// 		} else {
// 			arr2.push(el ** 2);
// 		}
// 	}
// 	return arr2;
// }
// getArr([1, [2, 7, 8], [3, 4], [5, [6, 7]]]);
// console.log(arr2)



