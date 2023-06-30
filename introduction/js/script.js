'use strict'

// ПОВТОР Перебирающие методы с новыми фишками в учебнике//

// Метод map для перебора массива в JavaScript

// Дан массив с числами. Используя метод map извлеките из каждого
// элемента массива квадратный корень и запишите результат в новый массив.

// let arr = [2, 3, 4, 5, 6, 7, 8, 22, 33, 44, ]
// let arrResult = []
// let result = arr.map(function (el) {
// 	arrResult.push(Math.floor(Math.sqrt(el)))
// })
// console.log(arrResult)

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// let arr = ['a', 'b', 'c', 'd'];
//
// let newArr = arr.map(function (el) {
// 	return el + '!';
// })
// console.log(newArr);

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

// let arr = ['привет', 'как', 'ты', 'сама'];
//
// let newArr = arr.map(function (el) {
// 	return el.split('').reverse().join('');
//
// })
// console.log(newArr);
// Дан следующий массив:
// Используя метод map преобразуйте этот массив в следующий:
// 	let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let arr = ['123', '456', '789'];
// let newArray = arr.map(function (el,i ,arr) {
// 	let arrNum = el.split('');
// 	for (let j = 0; j < arrNum.length; j++) {
// 		arrNum[j] = Number(arrNum[j]);
// 	}
// 	return arrNum;
// })
// console.log(newArray);

// Дан массив с числами. Используя метод map запишите в каждый
// элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// let newArr = arr.map(function (el,i) {
// 	return el * i;
// })
// console.log(newArr);

// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sumArr = 0;
// arr.forEach(function (el) {
// 	sumArr += el;
// })
// console.log(sumArr);

// Дан массив с числами. Оставьте в нем только положительные числа.
// let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9];
// let newArr = arr.filter(el => el >= 0);
// console.log(newArr);
// Дан массив с числами. Оставьте в нем только отрицательные числа.
// let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9];
// let newArr = arr.filter(el => el < 0);
// console.log(newArr);

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
// let arr = [0, 1, -2, 30, -4, 5, -6, 70, -8, 9, 10];
// let newArr = arr.filter(el => el >= 0 && el <= 10);
// console.log(newArr);

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let arrStr = ['quer', 'qwerty', '12345'];
// let newArr = arrStr.filter(el => el.length >= 5)
// console.log(newArr);
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
// let arr = [0, 28, 29, 30, 4, 5, 6, 70, 8, 9, 10];
// let sumArr = 0
// let newArr = arr.filter((el,i) => el * i <= 30)
// console.log(newArr);

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let newArr = arr.filter(el => typeof el !== 'object')
// console.log(newArr);

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// let arr = [28, 29, 30, 4, 5, 6, 70, 8, 9, 10];
// let bidZero = arr.every(el => el > 0);
// console.log(bidZero);
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

// let arr = [28, 29, 4, 5, 6];
// let newArr = arr.every((el,i) => el * i < 30);
// console.log(newArr);

// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

// let arr = [-1, -2, -3, 4];
// let bigZero = arr.some(el => el > 0);
// console.log(bigZero);
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
// let arr = [ 20, 2, -13, 11,];
// let newArr = arr.some((el,i) => el * i > 30);
// console.log(newArr);

// найти элкмент в масиве навный двум символам
// let arr = ['qwe', 'qwer', 'asdfg', 'qq'];
// let newArr = arr.find(el => el.length === 5);
// console.log(newArr);
// Давайте найдем индекс первого четного элемента массива:
// let arr = [1, 2, 3, 4, 5]
// let res = arr.findIndex(el => el % 2 === 0)
// console.log(res)

// Давайте найдем элемент массива, соответствующий условиям, прописанным в функции:
//
// 	let arr = [1, 2, 3, 4, 5];
//
// let res = arr.findLast(function(elem) {
// 	return elem > 0;
// });
//
// console.log(res);

// Давайте найдем индекс положительного числа в массиве:

// let arr = [-12, 13, -14, -15]
// let res = arr.findLastIndex(function (elem) {
// 	return elem > 0
// })
//
// console.log(res)

// Найдем сумму элементов массива:

// let arr = [1, 2, 3, 4, 5, 6]
//
// let res = arr.reduce(function (sum, elem) {
// 	return sum + elem
// },0)
//
// console.log(res)

// Давайте сольем двумерный массив в одномерный:

// let arr = [['a', 'b'], ['c'], ['d', 'e']]
//
// let res = arr.reduceRight(function (elem1, elem2) {
// 	return elem1.concat(elem2)
// }, [])
//
// console.log(res)
// let res2 = arr.reduce((el1,el2) => el1.concat(el2));
// console.log(res2);














