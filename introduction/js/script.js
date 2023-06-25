'use strict'

// ПОВТОР Типы функций это новое в учебнике //

// Сделайте функцию func, которая будет возвращать через return какую-либо строку.
// Выведите результат работы функции func в консоль.
// Выведите исходный код функции func в консоль.
// Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.

// function funStr () {
// 	return 'string'
// }
//
// console.log(funStr())
// console.log(funStr)
// funStr = 123
// console.log(funStr)
// // console.log(funStr()); повторный вызов функции после затирание выдаст ошибку

// Сделайте функцию func1, которая будет возвращать через return число 3.
// Скопируйте исходный код функции func1, в переменную func2.
// Выведите в консоль сумму результатов работы функций func1 и func2.

// function funNum() {
// 	return 3;
// }
// console.log(funNum());
//  let funNumCopie = funNum;
// console.log(funNumCopie());
// let sum = funNum() + funNumCopie();
// console.log(sum);
// Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.
// let fun1 = function () {
// 	return 1;
// }
// Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.
// let fun2 = function () {
// 	return 2;
// }
// Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом в консоль

// let sum = fun1() + fun2();
// console.log(sum);

// Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
// Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
// Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
// Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.
// let arrFunc = [
// 	function () {return 1},
// 	function () {return 2},
// 	function () {return 3},
// ]
//
// console.log(arrFunc[2]());
// console.log(arrFunc[0]() + arrFunc[1]() + arrFunc[2]());
//
// for (const el of arrFunc) {
// 	console.log(el());
// }

// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
// С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
// Переберите созданный объект циклом и выведите результаты работы функций в консоль.

// let objFun = {
// 	'func1': function () {return 1},
// 	'func2': function () {return 2},
// 	'func3': function () {return 3},
// }
// console.log(objFun['func1']() + objFun['func2']() + objFun['func3']())
// for (const key in objFun) {
// 	console.log(objFun[key]());
// }

// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.
// Сделайте так, чтобы первая функция возвращала сумму элементов массива,
// вторая функция - сумму квадратов, а третья - сумму кубов.

// let obj = {
// 	'func1': function (arr) {
// 		let sum = 0;
// 		for (const el of arr) {
// 			sum += el;
// 		}
// 		return sum;
// 	},
// 	'func2': function (arr) {
// 		let sumSquare = 0;
// 		for (const el of arr) {
// 			sumSquare += el * 2;
// 		}
// 		return sumSquare;
// 	},
// 	'func3': function (arr) {
// 		let sumCube = 0;
// 		for (const el of arr) {
// 			sumCube += el ** 3;
// 		}
// 		return sumCube;
// 	}
// }
//
// for (const key in obj) {
// 	console.log(obj[key]([2,4,6]))
// }








