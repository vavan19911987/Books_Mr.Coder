'use strict'

// ПОВТОР Пользовательские функции //

// function name() {
// 	console.log('Vladimir');
// }
// name();
// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.

// function sumNum(){
// 	let sum = 0;
// 	for (let i = 0; i <= 100; i++) {
// 		sum += i;
// 	}
// 	console.log(sum);
// }
//
// sumNum();

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.
// 	В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// function fun(num) {
// 	if (num >= 0) {
// 		console.log('+++');
// 	} else {
// 		console.log('---')
// 	}
// }
//
// fun(8);
// fun(-1);

// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// function sum(num1,num2,num3) {
// 	console.log(num1 + num2 + num3);
// }
// sum(1,2,3);

// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму. Пусть даны 3 переменные с числами:
// С помощью созданной вами функции выведите в консоль сумму значений эти переменных.

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
//
// function fun(num1,num2,num3) {
// 	console.log(num1 + num2 + num3);
// }
// fun(param1,param2,param3);

// Дана функция:
// Эта функция вызывается следующим образом:
// Расскажите, каким будет результат каждого из вызовов функции.

// function func (num = 5) {
// 	console.log(num * num)
// }
//
// func(2);
// func(3);
// func();

// Дана функция:
// Эта функция вызывается следующим образом:
// Расскажите, каким будет результат каждого из вызовов функции.
// 	function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3); // 5
// func(3); // 3
// func(); // 0

// Сделайте функцию, которая параметром принимает число, а
// возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.

// function sumSquare(num) {
// 	return num ** 3;
// }
//
// let res = sumSquare(3);
// console.log(res);

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.

// function fun(num) {
// 	return Math.sqrt(num).toFixed(2);
// }
// let res1 = fun(3);
// let res2 = fun(4);
// console.log(+res1 + +res2);

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
//
// function round(num) {
// 	return num.toFixed(3);
// }
//
// let res = round(sqrt(2));
// console.log(res);

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
//
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
//
// let res = sum(sqrt(2),sqrt(3),sqrt(4));
// function round(num) {
// 	return num.toFixed(2);
// }
// let result = round(res);
// console.log(result); // модификатор

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз,
// пока результат не станет меньше 10. Пусть функция возвращает количество итераций,
// которое потребовалось для достижения результата.

// function fun (num) {
// 	let sum = 0
//
// 	for (let i = 1; i <= num; i++) {
// 		sum = num / 2
// 		num = sum
// 		if (sum <= 10) {
// 			return i
// 		}
// 	}
// }
//
// console.log(fun(30))

// Дана следующая функция:
// Перепишите ее в сокращенной форме согласно изученной теории.
// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return  num1 - num2;
// 	}
// }
// console.log(func(3, 4));

// Сделайте функцию, которая параметром будет принимать массив
// с числами, и проверять, что все элементы в этом массиве являются четными числами.

// function funArr(arr) {
// 	for (const el of arr) {
// 		if (el % 2 !== 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
//
// console.log(funArr([2,4,6,2]));

// Сделайте функцию, которая параметром будет
// принимать число и проверять, что все цифры это числа являются нечетными.

// function funNum(num) {
// 	let str = String(num);
// 	for (let i = 0; i < str.length; i++) {
// 		if (str % 2 !== 1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
//
// console.log(funNum(132))

// Сделайте функцию, которая параметром будет принимать
// массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

// function arr(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(arr([1,2,3,1,4,5,6]))

// Код должен найти сумму результатов работы двух функций:

// function func1 () {
// 	return 3
// }
//
// function func2 () {
// 	return 5
// }
//
// console.log(func1() + func2())

// Код должен найти сумму элементов массива:

// function sum (arr) {
// 	let res = 0
//
// 	for (let elem of arr) {
// 		res += elem
//
// 	}
// 	return res
// }
//
// console.log(sum([1, 2, 3, 4, 5]))

// Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:

// let arr = [1, 2, 3, 4, 5]
//
// function func (arr) {
// 	let res = 0
//
// 	for (let elem of arr) {
// 		res += elem
// 	}
//
// 	return res
// }
//
// console.log(func(arr))

// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:

// function add (num) {
// 	if (num <= 9) {
// 		return '0' + num
// 	} else {
// 		return num;
// 	}
// }
//
// console.log(add(10))

// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
// function sumArr(arr) {
// 	let sumArrRes = 0;
// 	for (const el of arr) {
// 		sumArrRes += el;
// 	}
// 	return sumArrRes;
// }
// let result = sumArr([1,2,3]);
// let res = sumArr([3,3,4]);
// console.log(result);
// console.log(res);

// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
// function str(num) {
// 	let arr = num.split('');
// 	console.log(arr);// вывод самого массива из параметра
// 	return Object.keys(arr); // получение ключей массива в отдельный массив
//
// }
// let result = str('abcds');
// console.log(result);
// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// function strRevers(str) {
// 	return str.split('').reverse().join('');
// }
// let result = strRevers('12345');
// console.log(result);

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
// function upStr (str) {
// 	return  str.slice(0,1).toUpperCase() + str.slice(1);
// }
// let result = upStr('vladimir')
// console.log(result)
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
// function upStr (str) {
// 	let arr = str.split(' ')
// 	let result = []
// 	for (let i = 0; i < arr.length; i++) {
// 		result.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1))
// 	}
// 	return result.join(' ')
// }
//
// let result = upStr('привет мир мы рады тебе')
// console.log(result)

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
// function arrNum(arr) {
// 	for (let i = 0; i < 10; i++) {
// 		arr.push(i + 1);
// 	}
// 	return arr;
// }
// let result = arrNum([]);
// console.log(result);

// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
// function sumNum (num) {
// 	let str = String(num).split('')
// 	let sum = 0
// 	for (let i = 0; i < str.length; i++) {
// 		sum += +str[i]
// 	}
// 	return sum
// }
//
// let result = sumNum(5)
// console.log(result)

// Сделайте функцию, которая будет возвращать случайный элемент из массива.
// function randomS (arr) {
// 	let rand = Math.floor(Math.random() * arr.length);
// 	return arr[rand];
// }
// let result = randomS(['PHP', 'JavaScript', 'Python', 'Perl', 'Ruby', 'Go', 'Java']);
// console.log(result);

// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.













