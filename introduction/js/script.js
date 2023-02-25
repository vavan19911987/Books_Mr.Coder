"use strict";


// let obj = {x: 1, y: 2, z: 3};
//
// for (let key in obj) {
// obj[key] += 1;
//
// }
// console.log(obj);
//

// let arr = ['a', 'b', 'd', 'e'];
// let flag = false;
// for (let elem of arr) {
//     if (elem === 'c') {
//         flag = true;
//     }
// }
// if (flag === true){
//     console.log('+++');
// } else {
//     console.log('---');
// }
// Подсчитайте количество цифр 3 в этом массиве.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let contain = 0;
// for (let elem of arr) {
//     if (elem === 3) {
//         contain++;
//     }
// }
// console.log(contain);
// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let arr2 = [];
// let contain = 0;
// let contain2 = 0;
// for (let elem of arr) {
//     if (elem === 3) {
//         contain++;
//     } else if (elem === 2){
//         contain2++;
//     }
//
// }
// console.log(contain, contain2);
// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов

// let str = 'adcdaddcjhkhjkjh';
// let count = [];
// for (let i = 0; i <= str.length -1; i++) {
//     if (count[str[i]] === undefined){
//         count[str[i]] = 1;
//     } else {
//         count[str[i]]++;
//     }
// }
// console.log(count);

// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i < arr.length; i++) {
//     console.log(arr[i - 1] + arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i + 2]);
// }
// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
// let arr = [10, 20, 30, 40, 21, 32, 51, 11];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let str = String(arr[i]);
//     if (str[0] === '2' || str[0] === '1') {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// Пусть для примера перед вами стояла задача перебрать массив с двухзначными числами и найти числа,
    // у которых первая цифра на один больше второй.

// let arr = ['21', '32', '34', '43', '45', '54', '55'];
// let sum = 0;
//
// for (let elem of arr) {
//     if (+elem[0] === +elem[1] + 1) {
//         sum += +elem;
//         console.log(elem);
//     }
// }
// console.log(sum);

// let obj = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// };
// let sum = 0;
//
// for (let elem in obj) {
//     let str = String(obj[elem])
//     if (str[0] === '1' || str[0] === '2') {
//         sum += obj[elem];
//     }
// }
// console.log(sum);