'use strict'

// ПОВТОР IIFE Immediately Invoked Function Expression НОВАЯ ТЕМА В УЧЕБНИКЕ //

// Допишите следующий код так, чтобы его запуск алертом выводил '!':

// let func = (function() {
// 	return function () {
// 		return function () {
// 			return '!';
// 		}
// 	}
// })()()();
// console.log(func);

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

// let func = (function (num1) {
// 	return function (num2) {
// 		return num1 + num2;
// 	}
// })(1)(2)
// console.log(func);

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

// let func = (function (num1) {
// 	return function (num2) {
// 		return function (num3) {
// 			return num1 + num2 + num3;
// 		}
// 	}
// })(1)(2)(3)
//
// console.log(func);

// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.

// let func = (function () {
// 	let num = 1;
// 	return function () {
// 		console.log(num)
// 		num++
// 	}
// })();
//
// func()
// func()
// func()
// func()

// Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

// let func = (function () {
// 	let num = 1;
// 	return function () {
// 		if (num > 5) {
// 			num = 1
// 		}
// 		console.log(num)
// 		num++
// 	}
// })();
//
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()

