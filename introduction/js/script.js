'use strict'

// ПОВТОР Замыкания //

// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

// function test(num) {
// 	return function () {
// 		++num
// 		return num;
// 	}
// }
//
// let func1 = test(0);
// console.log(func1())
// console.log(func1())
// console.log(func1())
// console.log(func1())

// Пусть функция в замыкании хранит число 10. Сделайте так,
// чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.

// function test(num) {
// 	return function () {
// 		--num
// 		return num;
// 	}
// }
//
// let func1 = test(10);
// console.log(func1())
// console.log(func1())
// console.log(func1())
// console.log(func1())
// console.log(func1())
// console.log(func1())
// console.log(func1())
// console.log(func1())
// console.log(func1())
// console.log(func1())


// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а
// затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.

// function test(num) {
// 	return function() {
// 		if (num >= 0) {
// 			console.log(num);
// 			num--;
// 		} else {
// 			console.log('отсчет окончен');
// 		}
//
// 	};
// }
//
// let func1 = test(10);
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();

function test() {
	let counter = 0;

	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test();

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();














