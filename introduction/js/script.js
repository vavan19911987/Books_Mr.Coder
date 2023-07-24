'use strict'

// ПОВТОР Модули через замыкания NEW //

// ;(function() {
// 	let elem = document.querySelector('#div1'); // первый див
//
// 	function func(num) {
// 		return num ** 2; // возведем в квадрат
// 	}
//
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();
//
// ;(function() {
// 	let elem = document.querySelector('#div2'); // второй див
//
// 	function func(num) {
// 		return num ** 3; // возведем в куб
// 	}
//
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();

// ;(function(selector1, selector2) {
// 	let div = document.querySelector(selector1);
// 	let btn = document.querySelector(selector2);
//
// 	function func(num) {
// 		return num * num;
// 	}
//
// 	btn.addEventListener('click', function() {
// 		div.textContent = func(div.textContent);
// 	});
// })('#div', '#btn');

// Дана кнопка и три инпута,
// в которые вводятся числа.
// По нажатию на кнопку выведите в консоль сумму
// введенных чисел. Реализуйте задачу с помощью модуля.
// <input type="text" class="inp">
// <input type="text" class="inp">
// <input type="text" class="inp">
// <input type="submit" value="Click me" id="inpBtn">
// ;(function (selectorBtn, selectorInp) {
// 	let btn = document.querySelector(selectorBtn)
// 	let input = document.querySelectorAll(selectorInp)
// 	let sum = 0
// 	btn.addEventListener('click', () => {
// 		input.forEach((el) => {
// 			sum += +el.value
// 		})
// 		console.log(sum)
// 	})
//
// })('#inpBtn', '.inp')

// ;(function(selector1, selector2,
// 	selector3, selector4, selector5) {
// 	let div1 = document.querySelector(selector1);
// 	let div2 = document.querySelector(selector2);
// 	let div3 = document.querySelector(selector3);
// 	let res  = document.querySelector(selector4);
// 	let btn  = document.querySelector(selector5);
//
// 	btn.addEventListener('click', function() {
// 		let num1 = Number(div1.textContent);
// 		let num2 = Number(div2.textContent);
// 		let num3 = Number(div3.textContent);
//
// 		res.textContent = String(num1 + num2 + num3);
// 	});
// })('#div1', '#div2', '#div3', '#res',
// 	'#btn');

// ;(function(root) {
// 	let parent = document.querySelector(root);
//
// 	let div1 = parent.querySelector('#div1');
// 	let div2 = parent.querySelector('#div2');
// 	let div3 = parent.querySelector('#div3');
//
// 	let res  = parent.querySelector('#res');
// 	let btn  = parent.querySelector('#btn');
//
// 	btn.addEventListener('click', function() {
// 		let num1 = Number(div1.textContent);
// 		let num2 = Number(div2.textContent);
// 		let num3 = Number(div3.textContent);
//
// 		res.textContent = String(num1 + num2 + num3);
// 	});
// })('#parent');

// let config = {
// 	root: '#parent', type: 'p', amount: 5
// }
// ;(function({root, type, amount}) {
// 	let parent = document.querySelector(root);
//
// 	for (let i = 1; i <= amount; i++) {
// 		let elem = document.createElement(type);
// 		parent.append(elem);
// 	}
// })(config);

// Дан следующий модуль:
// 	Экспортируйте наружу одну из переменных и две любые функции.

// ;(function () {
// 	let str1 = 'переменная модуля'
// 	let str2 = 'переменная модуля'
// 	let str3 = 'переменная модуля'
// 	window.str1 = str1
// 	window.str2 = str2
// 	window.str3 = str3
//
// 	function func1 () {
// 		console.log('функция модуля')
// 	}
//
// 	window.func1 = func1
//
// 	function func2 () {
// 		console.log('функция модуля')
// 	}
//
// 	window.func2 = func2
//
// 	function func3 () {
// 		console.log('функция модуля')
// 	}
//
// 	window.func3 = func3
// })()
// window.func1()
// window.func2()
// window.func3()
// console.log(window.str1)
// console.log(window.str2)
// console.log(window.str3)
//
// func1()
// func2()
// func3()
// console.log(str1)
// console.log(str2)
// console.log(str3)

// ;(function() {
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
//
// 	window.module = {func1: func1, func2:
// 		func2, func3: func3};
// })();
//
// console.log(module)

// Дан следующий модуль:
// Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.

// ;(function() {
// 	let str1 = 'переменная модуля 1';
// 	let str2 = 'переменная модуля 2';
// 	let str3 = 'переменная модуля 3';
// 	let module = {}
//
//
// 	module.func1 = () => {
// 		alert('функция модуля 1');
// 	}
// 	module.func2 = () => {
// 		alert('функция модуля 2');
// 	}
// 	module.func3 = () => {
// 		alert('функция модуля 3');
// 	}
// 	module.func4 = () => {
// 		alert('функция модуля 4');
// 	}
// 	module.func5 = () => {
// 		alert('функция модуля 5');
// 	}
// 	window.module = module
// 	window.module2 = {str1, str2, str3}
// })();
// console.log(module)
// module.func1()
// module.func2()
// module.func3()
// module.func4()
// module.func5()
// console.log(module2)
// console.log(module2.str1)
// console.log(module2.str2)
// console.log(module2.str3)

// Дан следующий код:
// 	Оформите этот код в виде модуля.
// 	Эспортируйте наружу все функции, кроме вспомогательной.

// ;(function () {
// 	function avg1 (arr) {
// 		return sum(arr, 1) / arr.length
//
// 	}
//
// 	function avg2 (arr) {
// 		return sum(arr, 2) / arr.length
// 	}
//
// 	function avg3 (arr) {
// 		return sum(arr, 3) / arr.length
// 	}
//
// // вспомогательная функция
// 	function sum (arr, pow) {
// 		let res = 0
//
// 		for (let elem of arr) {
// 			res += elem * pow
// 		}
// 		return res
// 	}
//
// 	window.math = { avg1, avg2, avg3 }
// })()
// console.log(math.avg1([1, 2, 3]) + math.avg2([1, 2, 3,]))





















