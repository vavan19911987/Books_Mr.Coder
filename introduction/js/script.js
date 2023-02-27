"use strict";

// ПРАКТИКА ЦИКЛЫ

// Код должен вывести числа от 0 до 10
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Код должен вывести числа от 10 до 0:

// for (let i = 10; i > 0; --i) {
//     console.log(i);
// }

// Код должен вывести числа от 0 до 10:

// let i = 0;
//
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Код должен найти сумму целых чисел от 1 до 10:

// let res = 0;
//
// for (let i = 1; i <= 10; i++) {
//     res += i;
// }
// console.log(res);

// Код должен найти произведение целых чисел от 1 до 10:

// let res = 0;
//
// for (let i = 1; i <= 10; i++) {
//     res = i * i;
// }
// console.log(res);

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum += +elem;
// }
//
// console.log(sum);

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum += +elem;
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5', '5'];
// let sum = 0;
//
// for (let i = 0; i <= arr.length - 1; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum);
// отличие этих двух скриптов в том что <= and < и удалением последнего элемента
// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5', '5'];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum);

// Код должен возвести в квадрат каждый элемент массива:

// let arr = [1, 2, 3, 4, 5];
// let cube = 0;
// let arr2 = [];
// for (let elem of arr) {
//     cube = elem * 2;
//     arr2.push(cube);
// }
//
// console.log(arr2);

// Код должен заполнить массив числами от 1 до 5:

// let arr = [];
//
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//
// console.log(arr);

// Код должен найти сумму элементов объекта:
//
// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
//
// for (let elem in obj) {
//     sum += obj[elem];
// }
//
// console.log(sum);

// Код должен найти сумму элементов объекта:

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
//
// for (let key in obj) {
//     sum += obj[key];
// }
//
// console.log(sum);

// Код должен проверить, есть ли в массиве число 3 или нет:

// let arr = [1, 2, 4, 5];
// let flag = false;
//
// for (let elem of arr) {
//
//     if (elem == 3) {
//         flag = true;
//         break;
//     }
// }
// if (flag) {
//     console.log('+++');
// } else {
//     console.log('---');
// }
// Код должен заполнить массив числами от 1 до 5:

// let arr = [];
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//
// console.log(arr);

// Код должен проверить, есть ли в массиве число 3 или нет:

// let arr = [1, 2, 3, 4, 5];
// let res = false;
//
// for (let elem of arr) {
//     if (elem === 3) {
//         res = true;
//         break;
//     }
// }
// console.log(res);

// Код должен вывести только четные элементы из массива:

// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         console.log(elem);
//     }
// }


// Код должен записать в новый массив только нечетные элементы старого массива:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [];
// for (let elem of arr) {
//     if (elem % 2 != 0) {
//         arr2.push(elem);
//     }
// }
//
// console.log(arr2)


// Выведите с помощью цикла столбец чисел от 1 до 100.

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// Выведите с помощью цикла столбец чисел от 100 до 1.

// for (let i = 100; i >= 1; --i) {
//     console.log(i);
// }

// Выведите с помощью цикла столбец четных чисел от 1 до 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Заполните массив 10-ю иксами с помощью цикла.

// let arr = [];
// for (let i = 0; i <= 10; i++) {
//     arr.push('x');
// }
//
// console.log(arr);

// Заполните массив числами от 1 до 10 с помощью цикла

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr);

// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <= 10; i++) {
//     if (i < 10 && i > 0) {
//         console.log(i);
//     }
// }

// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let flag = false;
// for (let elem of arr) {
//     if (elem === 5) {
//         flag = true;
//     }
// }
//
// if (flag === true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива

// let arr = [1, 2, 3];
// let sum = 0;
// for (let elem of arr) {
//     sum += elem;
// }
// console.log(sum);

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива

// let arr = [1, 2, 3];
// let arr2 = [];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = arr[i] * 2;
//     arr2.push(sum);
// }
// console.log(arr2);

//Напишите скрипт, который будет находить факториал числа.
   // Факториал - это произведение всех целых чисел от единицы до заданного числа.
// let arr = [1, 2, 3];
// let sum = 0;
// for (let elem of arr) {
//     sum = elem * elem;
// }
// console.log(sum);

// Заполните массив числами от 10 до 1 с помощью цикла

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr);
//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr = [-1, 2, -3, 3, -4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let str = String(arr[i]);
//     if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
//         console.log(str);
//     }
// }

// Дан массив с числами. Выведите элементы этого массива в обратном порядке

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];
// for (let i = arr.length - 1; i >= 0; --i) {
//     arr2.push(arr[i]);
// }
// console.log(arr2)

// Дан массив с числами. С помощью цикла выведите на экран все элементы,
//     значение которых совпадает с их порядковым номером в массиве.

// let arr = [1, 1, 2, 3, 5, 6, 7, 8, 9, 9, 10];
//
// for (let i = 0; i <= arr.length -1; i++) {
//     if (arr[i] === i) {
//         console.log(arr[i], i);
//     }
// }

// Дан массив с числами. С помощью цикла for и функции document.write выведите
// каждый элемент массива с новой строки. Используйте для этого тег br.

// let arr = [1, 1, 2, 3, 5, 6, 7, 8, 9, 9, 10];
//
// for (let i = 0; i <= arr.length -1; i++) {
//     document.write(arr[i] + '<br/>');
// }

// Дан следующий объект с работниками и их зарплатами:
//     Увеличьте зарплату каждого работника на 10%.
// К примеру, увеличим число 80 на 20%.
// Для начала определим сколько составляют 20% от числа 80:
// 80 ⋅ 20 / 100 = 16
// Прибавим к числу процент:
//     80 + 16 = 96
// Ответ: 96
//
// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
//     employee8: 800,
// };
// let objRes = {};
// for (let key in obj) {
//     obj[key] = obj[key] * 10 / 100 + obj[key];
//     objRes[key] = obj[key];
// }
// console.log(objRes);

// Модифицируйте предыдущую задачу так, чтобы зарплата
// увеличивалась только тем работникам, у которых она меньше или равна 400.
//
// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
//     employee8: 800,
// };
// let objRes = {};
// for (let key in obj) {
//     if (obj[key] <= 400) {
//         obj[key] = obj[key] * 10 / 100 + obj[key];
//     }
//     objRes[key] = obj[key];
// }
// console.log(objRes);

// С помощью этих массивов создайте новый объект,
//     сделав его ключами элементы первого массива, а значениями - элементы второго.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};
//
// for (let i = 0; i < 5; i++) {
//     let key = arr1[i];
//     let val = arr2[i];
//
//     obj[key] = val;
// }
// console.log(obj);

// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// let obj = {
//     1: 6,
//     2: 7,
//     3: 8,
//     4: 9,
//     5: 10
// };
// let sumKey = 0;
// let sumOb = 0;
// for (let key in obj) {
//     sumKey += +key;
//     sumOb += obj[key];
// }
// console.log(+sumKey + sumOb);

// Запишите ключи этого объекта в один массив, а значения - в другой.
// let obj = {
//     'a': 1,
//     'b': 2,
//     'c': 3,
//     'd': 4,
//     'e': 5
// };
// let arrKey = [];
// let arrObjKey = [];
// for (let key in obj) {
//     arrKey.push(key);
//     arrObjKey.push(obj[key]);
// }
// console.log(arrKey, arrObjKey)
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.
// То есть у вас в результате получится вот такой массив:let arr = [125, 225, 128, 145, 281,];


// let obj = {
//     1: 125,
//     2: 225,
//     3: 128,
//     4: 356,
//     5: 145,
//     6: 281,
//     7: 452,
// };
// let arr = [];
// for (let key in obj) {
//     let str = String(obj[key]);
//     if (str[0] === '1' || str[0] === '2') {
//         arr.push(str);
//     }
// }
// console.log(arr);


// Создайте из этого массива следующий объект:let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i <= arr.length - 1; i++) {
//     let objKey = i + 1;
//     let vas = arr[i];
//     obj[objKey] = vas;
// }
// console.log(obj);















