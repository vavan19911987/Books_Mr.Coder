"use strict";
// ЦИКЛЫ
// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы
// этого массива в консоль до тех пор, пока не встретится
// элемент со значением 0. После этого цикл должен завершить свою работу.

// let arr = [1, 2, 4, 8, 10, 0, 21, 99];
// for (let elem of arr) {
//     if (elem === 0 ) {
//         break;
//     }
//     console.log(elem);
// }
//Дан массив с числами. Найдите сумму элементов,
// расположенных от начала массива до первого отрицательного числа.

// let arr = [1, 2, 4, 8, 10, 0, -1, 21, 99];
// let res = 0;
// for (let elem of arr) {
//     if (elem === -1) {
//         break;
//     }
//     res += elem;
// }
// console.log(res);


// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве
// (считаем, что это число обязательно есть в массиве).
// let arr = [1, 2, 4, 8, 10, 3, -1, 21, 99, 'a'];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'a') {
//         console.log(i + ' Позиция', ' ', arr[i] + ' то что на этой позиции');
//     }
// }

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
// let res = 0;
// for (let i = 0; i <= 100; i++) {
//     if (res >= 100) {
//         break;
//     }
//     res += i;
//     console.log(i);
//
// }
// console.log(res);

// for (let i = 1; i <= 9 ; i++) {
//     for (let j = 1; j <=3 ; j++) {
//         console.log(i);
//
//     }
// }

// С помощью двух вложенных циклов выведите на экран следующую строку:
//
//     11 12 13 21 22 23 31 32 33


// for (let i = 11; i <= 53; i++) {
//     for (let j = 1; j <= 1; j++) {
//         if (i >= 11 && i <= 13) {
//             console.log(i);
//             // document.write(i + ' ') ;
//         } else if (i >= 21 && i <= 23) {
//             console.log(i);
//             // document.write(i + ' ');
//         } else if (i >= 31 && i <= 33) {
//             console.log(i);
//             // document.write(i + ' ');
//         } else if (i >= 51 && i <= 53 ) {
//             // document.write(i + ' ');
//             console.log(i);
//         }
//     }
// }

// Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.

// let arr = [1, 2, 3, 4, 5, 6];
//
// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
// }
//
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6];
//
// for (let i = 0; i < arr.length; i++) {
//     arr[i] -= 1;
// }
//
// console.log(arr);


// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
//
// let obj = {};
//
// for (let i = 0; i <= 6; i++) {
//     let key = arr1[i];
//     let values = arr2[i];
//
//     obj[key] = values;
// }
//
// console.log(obj);

//Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// };
//
// let obj2 = {};
//
// for (let elem in obj) {
//     if (obj[elem] % 2 === 0){
//         let key = elem;
//         let val = obj[elem];
//         obj2[key] = val;
//     }
// }
// console.log(obj);
// console.log(obj2);

// Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта,
// а значениями - ключи старого объекта.

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let obj2 = {};
//
// for (let elem in obj) {
//         let key = obj[elem];
//         let val = elem;
//         obj2[key] = val;
// }
// console.log(obj);
// console.log(obj2);

























