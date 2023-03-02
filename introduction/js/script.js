"use strict";

//"Практика на использования изученных методов"
// Пусть у нас есть некоторая переменная с текстом:
// Преобразуйте последнюю букву строки в верхний регистр.
//     let str = 'london';
//     let result = str.slice(0,-1) + str.slice(-1).toUpperCase();
// console.log(result);
// Преобразуйте первые 2 буквы строки в верхний регистр.
// let str = 'london';
//     let result = str.slice(0, 2).toUpperCase() + str.slice(2);
// console.log(result);

// Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// Преобразуйте первую букву строки в нижний регистр.
//     let str = 'London';
//     let result = str.slice(0,1).toLowerCase() + str.slice(1)
// console.log(result);

// let str = 'word1 word2 word3';
//
// let arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
// }
// let str2 = arr.join(' ');
// console.log(str2);

// Преобразуйте строку 'var_test_text' в 'VarTestText'.
//     Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).

// let str = 'var_test_text';
// let arr = str.split('_');
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// let result = arr.join('');
// console.log(result);
//
// // Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.
//
// let arr2 = result.split(' ');
// for (let i = 0; i < arr2.length; i++) {
//     arr2[i] = arr2[i].slice(0,1).toLowerCase() + arr2[i].slice(1);
// }
// let result2 = arr2.join('');
// console.log(result2);

// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.
// let str = 'word1 word2 word3';
// let result = str.split(' ').reverse().join(' ');
// console.log(result);

// Код должен найти сумму цифр числа:

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
//     sum += +digit;
// }
// console.log(sum);
// Код должен найти произведение цифр числа:

// let num = 12345;
// let arr = String(num).split('');
// let prod = 1;
// for (let elem of arr) {
//     prod *= elem;
// }
// console.log(prod);




















