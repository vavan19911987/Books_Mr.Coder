"use strict";
// ЦИКЛЫ

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' Четные');
//
//     } else if (i % 2 == 1){
//         console.log(i + ' Не четные');
//
//     }
// }


// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let elem of arr) {
//     console.log(elem);
// }
//
// let obj = {
//     x: 1,
//     y: 2,
//     z: 3
// };
// for (let key in obj) {
//     console.log(key);
// }
// for (let key in obj) {
//     console.log(obj[key]);
// }
// let i = 11;
// while (i <= 33) {
//     console.log(i)
//     i++;
// }

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций, необходимых для этого.

// let num = 5;
// while (num <= 1000) {
//     num = num * 3;
//     console.log(num);
// }
//
// let arr = [1, 2, 3, 4, 5];
//     for (let i = arr.length - 1; i >= 0; --i) {
//         console.log(arr[i]);
//     }


// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = arr.length - 1; i >= 0; --i) {
//     console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 0; i <= arr.length -1; i++) {
//     console.log(arr[i]);
// }
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// let arr = [2, 5, 9, 15, 1, 4];
//
// for (let elem of arr) {
//     if (elem >= 3 && elem <= 10) {
//         console.log(elem);
//     }
// }
// Выведите в консоль те элементы объекта, значения которых - нечетные числа.

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// };
//
// for (let elem in obj) {
//     if (obj[elem] % 2 === 1) {
//         console.log(obj[elem]);
//     }
// }

// let res = 0;
//
// for (let i = 1; i <= 100; i++) {
//     res += i;
// }
//
// console.log(res);

// let res = 0;
//
// for (let i = 1; i <= 100; i++) {
//     res += i;
// }
//
// console.log(res);
// Найдите сумму четных чисел от 2 до 100.
// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 === 1) {
//         sum += i;
//     }
// }
// console.log(sum);

// Найдите произведение целых чисел от 1 до 20.


// let sum = 1;
// for (let i = 1; i <= 20; i++) {
//     if (i <= 20){
//         sum *= i;
//     }
// }
// console.log(sum);

// let arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         sum += elem;
//     }
// }
// console.log(sum);
// let arr = [2, 5, 9, 3, 1, 4];
// let sum = 1;
// for (let elem of arr) {
//     if (elem) {
//         sum = sum * elem;
//
//     }
// }
// console.log(sum);

// let arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let elem of arr) {
//     let cub = elem * 2;
//     sum += cub;
// }
// console.log(sum);

// let arr = [];
// for (let i = 9; i >= 0; --i) {
//     arr += i;
//
// }
//
// console.log(arr);

// Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.

// for (let i = 0; i <= 1000; i++) {
//     let str = String(i);
//     console.log(str[0]);
// }

// Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.

// for (let i = 10; i < 1000; i++) {
//     let str = String(i);
//     console.log(+str[0] + +str[1])
// }
// Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     if (str[0] === '1') {
//         console.log(str);
//     }
// }
// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     let sum = +str[0] + +str[1];
//     if (sum === 5) {
//         console.log(str);
//     }
// }