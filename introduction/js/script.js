"use strict";

//"Перебирающие методы и Операторы spread и rest"

// Дан массив с числами. Используя метод map извлеките из каждого элемента
// массива квадратный корень и запишите результат в новый массив.
// let arr = [1, 4, 9, 16, 3];
// let newArr;
// newArr = arr.map(function(elem) {
//     return Math.sqrt(elem);
// });
// console.log(newArr);

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// let arr = ['1', '2', '3'];
// let newArr;
// newArr = arr.map(function (elem){
//     return elem += '!';
// })
// console.log(newArr);

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
// let arr = ['отел','амиз'];
// let newArr;
// newArr = arr.map(el => el.split('').reverse().join(''));
// console.log(newArr);

// Дан следующий массив:Используя метод map преобразуйте этот массив в следующий:
// let arr = ['123', '456', '789'];
//     let arr = [ [1, 2, 3],[4, 5, 6],[7, 8, 9]];

// let arr = ['123', '456', '789'];
// let newArr;
// newArr = arr.map(function (elem){
//     return elem = elem.split('')
// });
// let newNumArr;
// newNumArr = newArr.map(function (elem){
//     return elem.map(function (i) {
//         return Number(i)
//     });
// });
// console.log(newNumArr);

// СОКРАЩЕННАЯ ФОРМА

// let arr = ['123', '456', '789'];
// let newArr;
// let newNumArr;
// newArr = arr.map(el => el.split(''))
// newNumArr = newArr.map(el =>  el.map(i => +i));
// console.log(newNumArr);

// Дан массив с числами. Используя метод map запишите в каждый
// элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr;
// newArr = arr.map((el,i) => el * i);
// console.log(newArr);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let res = arr.map(elem => elem.map(num => num * num));
// console.log(res);

// \Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(el => sum += el ** 2);
// console.log(sum);

// Дан массив с числами. Оставьте в нем только положительные числа.

// let arr = [-1, 2, -3, 4, 5];
// console.log(arr.filter(el => el > 0));

// Дан массив с числами. Оставьте в нем только отрицательные числа.

// let arr = [-1, 2, -3, 4, -5];
// console.log(arr.filter(el => el < 0));

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

// let arr = [1, -2, 3, 10, -12, 0, 9, 15];
// console.log(arr.filter(el => el >= 0 && el < 10));

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arrStr = ['лето', 'много', 'скорость', 'волонтер'];
// console.log(arrStr.filter(el => el.length > 5));

// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.filter((el,i) => el * i < 30));

// Дан массив, в нем могут быть обычные элементы и подмассивы, например
    // [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// console.log(arr.filter(el => typeof el !== 'object'));

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [-1, -2, -3, 4, 5, 6];
// console.log(arr.filter(el => el < 0).length);
// let res = arr.filter(el => el < 0);
// console.log(res.length);

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// let arr = [1,2,3,4,5,6];
// let res = arr.every(el => el > 0);
// console.log(res);

// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

// let arr = [1,2,3,4,5];
// let res = arr.every((el,i) => el * i < 30);
// console.log(res);

// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

// let arr=  [-1,-2,-3,9];
// let res = arr.some(el => el > 0);
// console.log(res);

// Дан массив с числами. Проверьте то, что хотя бы для одного элемента
// произведение его значения на порядковый номер больше 30.

// let arr = [1,2,3,4,5,6,7];
// let res = arr.some((el,i) => el * i > 30);
// console.log(res);


// Дан массив:
// Дана также функция:
// Найдите с помощью приведенной функции сумму элементов массива.

//     let arr = [1, 2, 3, 4, 5];
// function func(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr));

// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
//     return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }
//
// console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

// let arr = [1,-2,3,4,5,6,7];
//
// let min = Math.min(...arr);
// console.log(min);

// let num = 12345;
// let arr = [...String(num)];
// console.log(arr);


// Напишите функцию, которая будет принимать параметрами произвольное
// количество чисел и возвращать их среднее арифметическое.

// function num(...number) {
//     let sum = 0;
//     for (let elem of number) {
//         sum += elem / 4;
//     }
// return sum;
// }
// let result = num(2,3,4,5);
// console.log(result);


// сливание нескольких массивов в один
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];
// function unite(...arr) {
//     return arr;
// }
// let res = unite(arr1,arr2,arr3);
// console.log(res);

// слитея нескольких массивов а один.
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];
// function unite(...arr) {
//     return [].concat(...arr);
// }
// let res = unite(arr1,arr2,arr3);
// console.log(res);

// сливание массивов в двухмерный затем в одномерный
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];
// function unite(...arr) {
//     return arr;
// }
// let res = unite(arr1,arr2,arr3);
// let result = [].concat(...res);
// console.log(result);









