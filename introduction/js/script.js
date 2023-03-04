"use strict";

//"Основы работы с пользовательскими функциями в JavaScript"

// Сделайте функцию, выводящую в консоль ваше имя.
// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.

// function name() {
//     console.log('Владимир');
// }
// name();
//
// function num() {
//     let num = 0;
//     for (let i = 0; i <= 10; i++) {
//         num += i;
//     }
//     console.log(num);
// }
// num();

// function cube(num) {
//     console.log(num * 3);
// }
// cube(2);

// Сделайте функцию, которая параметром принимает число и проверяет,
//     положительное это число или отрицательное.
//     В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// function nums(num) {
//     if (num > 0) {
//         console.log('+++');
//     } else {
//         console.log('---');
//     }
// }
// nums(3);

// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// function nums(num1,num2,num3) {
//     console.log(num1 + num2 + num3);
// }
// nums(1,2,3);

// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму.
//     Пусть даны 3 переменные с числами:
//     С помощью созданной вами функции выведите в консоль сумму значений эти переменных.

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
//
// function sum(num1,num2,num3) {
//     console.log(num1 + num2 + num3);
// }
// sum(param1,param2,param3);

// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа.
//     С помощью этой функции найдите куб числа 3 и запишите его в переменную res.

// function number(num) {
//     return Math.pow(num,3);
// }
// let res = number(4);
// console.log(res);

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
//     С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.


// function number(num) {
//     return Math.sqrt(num);
// }
// let res = number(8);
// let res2 = number(17);
// console.log(res.toFixed(1));
// console.log(Math.ceil(res2).toFixed(1));
// console.log(Math.ceil(number(199)).toFixed(1));

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

// function sqrt(num) {
//     return Math.sqrt(num);
// }
//
// function round(num) {
//     return num.toFixed(3);
// }
// let result = round(sqrt(2));
// console.log(result);

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
//     С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.


// function sqrt(num) {
//     return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// // Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
// // С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части.
//
// function round(num) {
//     return num.toFixed(3);
// }
// let res = round(sum(sqrt(2),sqrt(3),sqrt(4)));
// console.log(res);

// Что выведется в консоль в результате выполнения следующего кода:
//     Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

// function func(num) {
//     let sum = 0;
//
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
//
// }
//
// console.log( func(5) );

// Напишите функцию, которая параметром будет принимать число и делить
// его на 2 столько раз, пока результат не станет меньше 10
//     . Пусть функция возвращает количество итераций, которое потребовалось
// для достижения результата.
//
// function fun(num) {
// let sum = 0;
//
//     for (let i = 1; i <= num; i++) {
//         sum = num / 2;
//
//         num  = sum.toFixed(0);
//
//
//         if (sum.toFixed(0) <= 10) {
//
//                 return i;
//             }
//             i++;
//     }
// }
// //
// console.log(fun(1300));
// // вот дана задача как бы решина выводит иттерации но если ввести допустим 1300 или 1900 то выдает undefined
// // где я что сделал не так

// Перепишите ее в сокращенной форме согласно изученной теории
// function func(num1, num2) {
//     if (num1 > 0 && num2 > 0) {
//         return  num1 * num2;
//     } else {
//         return  num1 - num2;
//     }
// }
// console.log(func(-3, -4));

// Сделайте функцию, которая параметром будет принимать массив с числами,
// и проверять, что все элементы в этом массиве являются четными числами.

// function isPositive(arr) {
//     for (let elem of arr) {
//         if (elem % 2 === 1) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isPositive([2, 4, 6]));

// // Сделайте функцию, которая параметром будет принимать число и проверять,
// //     что все цифры это числа являются нечетными.
//
// function number(num) {
//     num = String(num);
//     let arr = num.split('');
//     for (let string of arr) {
//         if (string % 2 === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(number(1357));

// Сделайте функцию, которая параметром будет принимать массив и проверять,
//     есть ли в этом массиве два одинаковых элемента подряд.
//
// function arr(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(arr(['1', '2', '3', '4', '5', '5', '2', '2']));
// Перепишите ее код в сокращенной форме согласно изученной теории.
// function func(a, b) {
//    return a === b;
// }
//
// console.log(func(2,3))

// Дана следующая функция:Перепишите ее код в сокращенной форме согласно изученной теории.

    // function func(a, b) {
    //    if (a + b >= 10) {
    //       return true;
    //    } else {
    //       return false;
    //    }
    // }

// function func(a, b) {
//    return a + b >= 10;
// }
//
// console.log(func(1,2))

// сумма масивов
// function func(arr1, arr2) {
//     let res1 = 0;
//
//     for (let elem of arr2) {
//         res1 += elem;
//     }
//
//     let res2 = 0;
//
//     for (let elem of arr1) {
//         res2 += elem;
//     }
//
//     return res1 / res2;
// }
//
// console.log(func([1,2,3], [1,2,3]));

// Код должен найти сумму результатов работы двух функций:

// function func1() {
//     return 3;
//     }
// function func2() {
//     return 3;
// }
// console.log( func1() + func2() );

// Код должен найти сумму элементов массива:

//     function sum(arr) {
//         let res = 0;
//
//         for (let elem of arr) {
//             res += elem;
//         }
//         return res;
//
//     }
//
// console.log(sum([1, 2, 3, 4, 5]));

// Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:
// function func(arr) {
//     let res = 0;
//
//     for (let elem of arr) {
//         res += elem;
//     }
// return res;
// }
//
// console.log(func([1, 2, 3, 4, 5]))

// Код должен найти сумму результатов работы двух функций:

//     function func1() {
//         return 3;
//     }
// function func2() {
//     return 5;
// }
//
// console.log( func1() + func2() );

// Код должен найти сумму элементов массива:
// function sum(arr) {
//     let sum = 0;
//
//     for (let elem of arr) {
//         sum += elem;
//     }
//
//     return sum;
// }
//
// console.log(sum([1,2,3]))

// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:

// function add(num) {
//     if (num <= 9) {
//         return '0' + num;
//     } else  {
//         return num;
//     }
// }
// console.log(add(100))
// Код должен найти сумму элементов массива:
// function sum(arr) {
//     let res = 0;
//     for (let elem of arr) {
//         res += elem;
//     }
//     return res;
// }
//
// console.log(sum([1, 2, 3, 4, 5]));

// Код должен найти сумму цифр числа:
// function getDigitsSum(num) {
//     num = String(num);
//     let arr = num.split('');
//     let sum = 0;
//     for (let elem of arr) {
//         sum += +elem;
//     }
//     return sum;
// }
// console.log(getDigitsSum(123));

// Код должен проверить число на то, что оно является простым:

// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//
//         if (num % i !== 0) {
//             return true;
//         } else {
//             return false;
//         }
//
//     }
// }
// console.log(isPrime(37)); // должен вывести true










