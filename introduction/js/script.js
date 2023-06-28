'use strict'

// ПОВТОР Вложенные функции это новое в учебнике //

// Сделайте функцию test, параметрами принимающую 3 функции.
// Передайте в нее первым параметром функцию,
// возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3.
// Выведите в консоль сумму результатов функций.

// test(function () {return 1}, function () {return 2}, function () {return 3})
//
// function test (func1, func2, func3) {
// 	console.log(func1() + func2() + func3())
// }

// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
// Пусть первая функция возвращает 1, вторая - 2, а третья - 3.
// Передайте эти функции параметром в функцию test из предыдущей задачи.
// let get1 = function () {
// 	return 1
// }
// let get2 = function () {
// 	return 2
// }
//
// let get3 = function () {
// 	return 3
// }
//
// function test (func1, func2, func3) {
// 	let sumFunc = func1() + func2() + func3()
// 	return sumFunc
// }
//
// let res = test(get1, get2, get3)
//
// console.log(res)
// Скопируйте код моей функции test. Вызовите эту функцию, передав ей
// параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
// test(function(num) {
// 	return num ** num;
// });
//
// function test(func) {
// 	console.log(func(3));
// }
// Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
// function func(num) {
// 	return num ** num;
// }
// test(func);
//
// function test(func) {
// 	console.log(func(3));
// }

// Переделайте передаваемую функцию на Function Expression с тем же именем func.
// let func = function (num) {
// 	return num ** num;
// }
// test(func);
//
// function test(func) {
// 	console.log(func(3));
// }

// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму.
// При вызове передаваемой функции внутри test передайте в
// передаваемую функцию число 2 и число 3. Выведите алертом результат.

// let func = function (num,num2) {
// 	return num + num2;
// }
// test(func);
//
// function test(func) {
// 	console.log(func(2,3));
// }

// Пусть функция test первым параметром принимает число, а вторым и третьим
// параметрами - функции, также параметром принимающие числа.
// Пусть функция test возвращает сумму результатов переданных функций:

// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию,
// возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.

// function get1 () {
// 	return 2
// }
//
// function get2 () {
// 	return 2
// }
//
// let res = test(2, get1, get2)
//
// function test (num, func1, func2) {
// 	return func1(num) + func2(num)
// }
//
// console.log(res);

// function get1 (num) {
// 	return num * 2
// }
//
// function get2 (num) {
// 	return num ** 3
// }
//
// let res = test(2, get1, get2)
//
// function test (num, func1, func2) {
// 	return func1(num) + func2(num)
// }
//
// console.log(res)

// Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.

// function transformArr(arr, funcTransform) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = funcTransform(arr[i]);
// 	}
// 	return arr;
// }
//
// let result = transformArr([1,2,3], function (num) {
// 	return num * num;
// })
// console.log(result);

// Вызовите созданную вами функцию test, передав ей параметром массив с числами.
// Сделайте так, чтобы функция вернула массив с кубами этих чисел.

// function tranformArrInCube (arr, funcTransform) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = funcTransform(arr[i]);
// 	}
// 	return arr;
// }
//
// let result = tranformArrInCube([2,3,4], function (num) {
// 	return num ** 3;
// })
// console.log(result);

// Сделайте функцию func, которая параметрами будет принимать два числа,
// а возвращать сумму квадрата первого числа с кубом второго числа.
// Сделайте для этого вспомогательную функцию square, возводящую число в квадрат,
// и вспомогательную функцию cube, возводящую число в куб.

// function sumSquareAndCube (num1, num2) {
// 	function square(num1) {
// 		return num1 * 2;
// 	}
// 	function cube (num2) {
// 		return num2 ** 3;
// 	}
//
// 	return square(num1) + cube(num2);
// }
//
// let result = sumSquareAndCube(2,3);
// console.log(result);

// Сделайте функцию func1, которая будучи вызвана вот так:
// func1()(), вернет число 1. Сделайте аналогичную функцию func2,
// возвращающую число 2. Найдите сумму результатов этих функций.

// function func1() {
// 	return function () {
// 		return 1
// 	}
// }
//
// function func2() {
// 	return function () {
// 		return 2
// 	}
// }
// let result = func1()() + func2()();
// console.log(result);
// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
// function func () {
// 	return function () {
// 		return function () {
// 			return function () {
// 				return function () {
// 					return '!';
// 				}
// 			}
// 		}
// 	}
// }
//
// console.log(func()()()()());

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// function func1(num1) {
// 	return function (num2) {
// 		return function (num3) {
// 			return num1 + num2 + num3
// 		}
//
// 	}
// }
// let result = func1(2)(3)(4);
// console.log(result);

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

// function funcArr(el1) {
// 	return function (el2) {
// 		return function (el3) {
// 			return function (el4) {
// 				return function () {
// 					arr.push(el1,el2,el3,el4);
// 					return arr;
// 				}
// 			}
// 		}
// 	}
// }
//
// let arr = [];
// let restArr = funcArr(2)(3)(4)(5)();
// console.log(restArr);

// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
// function each(arr, callback) {
// 	let result = [];
// 	for (const el of arr) {
// 		result.push(callback(el));
// 	}
// 	return result;
// }
//
// let res = each([2,4,8],function (num) {
// 	return num * 2;
// })
// console.log(res);

// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
// function each(arr, callback) {
// 	let result = [];
// 	for (const el of arr) {
// 		result.push(callback(el));
// 	}
// 	return result;
// }
//
// let res = each(['привет','мир','я','тута'], function (el) {
// 		return el.split('').reverse().join('');
// })
//
// console.log(res);

// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

// function each(arr, callback) {
// 	let result = [];
// 	for (const el of arr) {
// 		result.push(callback(el));
// 	}
// 	return result;
// }
//
// let res = each(['привет','мир'], function (el) {
// 		return el.slice(0,1).toUpperCase() + el.slice(1);
// })
// console.log(res);

// С помощью следующей функции возведите все элементы массива в куб:

// function each (arr, callback) {
// 	let result = []
// 	for (const el of arr) {
// 		result.push(callback(el))
// 	}
// 	return result
// }
//
// function cube (num) {
// 	return num ** 3
// }
//
// let res = each([2,3], cube)
// console.log(res);


function each (arr, callback) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}
	return result
}
// let result = filter([1, 2, 3, 4, 5], elem => elem % 2 === 0);
// console.log(result);
// let result = every([1, 2, 3, 4, 5], elem => elem > 0);
// let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);
// Дана следующая функция с коллбэком:
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = each(arr, (elem, index) => elem * index > 10);
// // Упростите коллбэк через стрелочную функцию.
// console.log(result)