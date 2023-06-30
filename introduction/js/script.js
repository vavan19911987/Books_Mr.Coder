'use strict'

// ПОВТОР Оператор spread and Оператор rest с новыми фишками//

// Дан массив:
// Дана также функция:
// Найдите с помощью приведенной функции сумму элементов массива.
// let arr = [1, 2, 3, 4, 5]
//
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
//
// console.log(func(...arr));

// Не запуская код, определите, что выведется в консоль:

// 	function func(n1, n2, n3, n4, n5, n6, n7, n8) {
// 		return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8)
// 	}
//
// console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]))

// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

// let arr = [1,2,3,4,5,6,7,-5];
// let result = Math.min(...arr);
// console.log(result);

// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое

// function sumNum (...res) {
// 	let sum = 0;
// 	for (const el of res) {
// 		sum += el / res.length
// 	}
// 	return sum
// }
//
// console.log(sumNum(2, 3, 4, 5, 6))

// Давайте сделаем функцию unite, которая параметрами будет принимать произвольное количество массивов и сливать их в один двухмерный.
// function unite(...arrs) {
// 	return arrs;
// }
// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);

