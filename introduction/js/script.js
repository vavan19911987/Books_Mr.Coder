"use strict";
// let num1 = 1;
// let num2 = 2;
// let sum = num1 + num2;
//
// if (sum === 3) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// let num1 = '1';
// let num2 = '2';
// let sum = +num1 + +num2;
//
// if (sum === 3) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// let num = 123;
// let str = String(num);
//
// if (str[0] === '1') {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// let num = 12;
//
// let str = String(num);
//
// if (str.length === 2) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:

// let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам
//
// let sum1 = +num[0] + +num[1] + +num[2];
// let sum2 = +num[3] + +num[4] + +num[5];
//
// if (sum1 == sum2) {
//     console.log('суммы равны');
// } else {
//     console.log('суммы не равны');
// }

// Практика на условия if-else в JavaScript

// В переменной month лежит какое-то число из интервала
// от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month = 10;
//
// if (month > 0 && month <= 3) {
//     console.log('зима');
// } else if (month > 3 && month <= 6) {
//     console.log('весна');
// } else if (month > 6 && month <= 9) {
//     console.log('лето');
// } else if (month > 9 && month <= 12) {
//     console.log('осень');
// } else {
//     console.log('не время года');
// }

// Дана строка, состоящая из символов, например, 'abcde'. Проверьте,
//     что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = 'abcde';
//
// if (str[0] === 'b') {
//     console.log('yes');
// } else {
//     console.log('no');
// }
//
// Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num = 12345;
// let str = String(num);
//
// if (str[0] === '1' || str[0] === '2' || str[0] === '3') {
//     console.log('yes');
// } else {
//     console.log('no');
// }
// Дано трехзначное число. Найдите сумму цифр этого числа.

// let num = 123;
// let str = String(num);
// console.log(+str[0] + +str[1] + +str[2]);

// Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
//     Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num = 123033;
// let str = String(num);
//
// let sum1 = +str[0] + +str[1] + +str[2];
// let sum2 = +str[3] + +str[4] + +str[5];
//
// if (sum1 === sum2) {
//     console.log('равны');
// } else  {
//     console.log('не равны');
// }























