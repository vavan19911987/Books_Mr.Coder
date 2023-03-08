"use strict";

//"Основы работы с пользовательскими функциями в JavaScript ПРАКТИКА"

// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

// function arrSum(arr) {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(arrSum([1,2,3]));

// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
// function divider(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(divider(15));

// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

// function strArr(str) {
//     return str.split('');
// }
// console.log(strArr('absd'));
// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

// function strRevers(str) {
//     return str.split('').reverse();
// }
// console.log(strRevers('absd'));

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
// function strUP(str){
//     return str.slice(0,1).toUpperCase() + str.slice(1);
// }
// console.log(strUP('qwerty'));

// // Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
//  function strUp(str) {
//     str = str.split(' ')
//      let x = '';
//      for (const elem of str) {
//          x  += (elem.slice(0,1).toUpperCase()  + elem.slice(1) +  ' ');
//      }
//      return x.split(' ').join(' ');
//  }
// console.log(strUp('привет мое имя владимир я разработчик'));

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// function numArr() {
//     let arr = [];
//     for (let i = 1; i <= 100; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(numArr())

// Сделайте функцию, которая будет возвращать случайный элемент из массива.

// function getArr(arr) {
//         let x = Math.floor(Math.random() * arr.length) ;
//     return arr[x];
// }
// console.log(getArr([1,2,3,4,5,6,7,8,9]));

// Сделайте функцию, которая будет проверять пару чисел на дружественность.
//     Дружественные числа - два числа, для которых сумма всех собственных
// делителей первого числа равна второму числу и наоборот,
//     сумма всех собственных делителей второго числа равна первому числу.

// function divider(num) {
//     let arr = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// function divider2(num2) {
//     let arr = [];
//     for (let i = 1; i < num2; i++) {
//         if (num2 % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// function sumDivider(sum1) {
//     let sumArr = 0;
//     for (let i = 0; i < sum1.length; i++) {
//         sumArr += sum1[i];
//     }
//     return sumArr;
// }
// function sumDivider2(sum2) {
//     let sumArr2 = 0;
//     for (let i = 0; i < sum2.length; i++) {
//         sumArr2 += sum2[i];
//     }
//     return sumArr2;
// }
// function dividerSum(num1,num2) {
//     if (num1 === num2) {
//         return 'Дружественные числа';
//     }
//     return 'Не дружественные числа';
// }

// console.log(dividerSum(sumDivider(divider(12)),sumDivider2(divider2(12))));
// function divider(num) {
//     let arr = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// function sumDivider(sum1) {
//     let sumArr = 0;
//     for (let i = 0; i < sum1.length; i++) {
//         sumArr += sum1[i];
//     }
//     return sumArr;
// }
// function dividerSum(num1,num2) {
//     if (num1 === num2) {
//         return 'Дружественные числа';
//     }
//     return 'Не дружественные числа';
// }
//
// console.log(dividerSum(sumDivider(divider(12)), sumDivider(divider(12))));

// function divider(dividend,dividend2) {
//     let dividerArr = [];
//     let dividerArr2 = [];
//     let arrDivider = [];
//     for (let i = 1; i < dividend; i++) {
//         if (dividend % i === 0) {
//             dividerArr.push(i);
//         }
//     }
//     for (let i = 1; i < dividend2; i++) {
//         if (dividend2 % i === 0) {
//             dividerArr2.push(i);
//         }
//     }
//     arrDivider.push(dividerArr,dividerArr2);
//     return arrDivider;
// }
// function sumDivider(sum) {
//     let dividerSum = 0;
//     let dividerSum2 = 0;
//     let dividerArrSum = [];
//     for (let i = 0; i <= sum.length; i++) {
//         dividerSum += sum[0][i];
//         dividerSum2 += sum[1][i];
//     }
//     dividerArrSum.push(dividerSum,dividerSum2)
//     return dividerArrSum;
// }
// function getDivider(arrSumDivider) {
//     for (let i = 1; i < arrSumDivider.length; i++) {
//         if (arrSumDivider[0] === arrSumDivider[1]) {
//             return 'Дружественные числа';
//         } else {
//             return 'Не дружественные числа';
//         }
//     }
// }
//
// console.log(getDivider(sumDivider(divider(6,6))))

// Сделайте функцию, которая будет проверять число на совершенность.
//     Совершенное число - это число, сумма собственных делителей которого равна этому числу.

// function divider(num) {
//     let sum = 0;
//     for (let i = 0; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//             if (sum === num) {
//                 return 'Сумма делителя и делимого совпадают';
//             }
//         }
//     }
//     return 'Сумма делителя и делимого не совпадают';
// }
// console.log(divider(496));

// Найдите все счастливые билеты. Счастливый билет - это билет,
//     в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера.

// function happyTicket(ticketArr) {
//     let sum1 = 0;
//     let sum2 = 0;
//     let arrHappyTicket = [];
//     for (const elemTicket of ticketArr) {
//         for (let elem of elemTicket) {
//             sum1 = +elem[0] + +elem[1] + +elem[2];
//             sum2 = +elem[3] + +elem[4] + +elem[5];
//             if (sum1 === sum2) {
//                 arrHappyTicket.push(elem);
//             }
//         }
//     }
//     return arrHappyTicket;
// }
// console.log(happyTicket([['123123'],['120331'],['555555'],['312320'],['456456'],['1233216565']]));


// Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей.

// function numbers(num1,num2) {
//     let arr = [];
//     for (let i = 0; i < num1; i++) {
//         if (num1 % i === 0) {
//             arr.push(i);
//         }
//     }
//     for (let j = 0; j < num2; j++) {
//         if (num2 % j === 0) {
//             arr.push(j);
//         }
//     }
//     return arr;
// }
//
// console.log(numbers(15,12)); // правильно находит обшие делители

// function numbers(num1,num2) {
//     let arrDivider = [];
//     let arrRes = [];
//     for (let i = 0; i < num1; i++) {
//         if (num1 % i === 0) {
//             arrDivider.push(i);
//         }
//     }
//     for (let j = 0; j < num2; j++) {
//         if (num2 % j === 0) {
//             for (let k = 0; k < arrDivider.length; k++) {
//                 if (arrDivider[k] === j) {
//                     arrRes.push(j);
//                 }
//             }
//         }
//     }
//     return arrRes;
// }
// console.log(numbers(88,44)); // правильно находит обший делитель

// Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит.

// function string(str) {
//     let arrRus = str.split('');
//     arrRus.splice(0,1,'P');
//     arrRus.splice(1,1,'r');
//     arrRus.splice(2,1,'i');
//     arrRus.splice(3,1,'v');
//     arrRus.splice(4,1,'e');
//     arrRus.splice(5,1,'t');
//     arrRus.splice(7,1,'M');
//     arrRus.splice(8,1,'i');
//     arrRus.splice(9,1,'r');
//     let arrEn = arrRus.join('');
//     return arrEn;
// }
// console.log(string('Привет Мир'));

// function translit(str){
//     let strEn = '';
//     let converter = {
//         'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
//         'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
//         'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
//         'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
//         'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
//         'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
//         'э': 'e',    'ю': 'yu',   'я': 'ya',
//
//         'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
//         'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
//         'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
//         'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
//         'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
//         'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
//         'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
//     };
//
//     for (let i = 0; i < str.length; ++i ) {
//         if (converter[str[i]] == undefined){
//             strEn += str[i];
//         } else {
//             strEn += converter[str[i]];
//         }
//     }
//     return strEn;
// }
//
// console.log(translit('люк'));

// Сделайте функцию, которая будет принимать число, а возвращать это число прописью.
//     Пусть функция работает с числами до 999. Смотрите пример:

// function numbers(num) {
//     let str = '';
//     num = String(num);
//     let converter = {
//         '1': 'Один',  '4': 'Четыре',  '7': 'Семь',
//         '2': 'Два',   '5': 'Пять',    '8': 'Восемь',
//         '3': 'Три',   '6': 'Шесть',   '9': 'Девять',    '10': 'Десять',
//
//         '20': 'Двадцать',       '90': 'Девяносто',      '700': 'Семьсот',
//         '30': 'Тридцать',       '100': 'сто',           '800': 'Восемьсот',
//         '40': 'Сорок',          '200': 'Двести',        '900': 'Девятьсот',
//         '50': 'Пятьдесят',      '300': 'Триста',
//         '60': 'Шестьдесят',     '400': 'Четыреста',
//         '70': 'Семьдесят',      '500': 'Пятьсот',
//         '80': 'Восемьдесят',    '600': 'Шестьсот',
//     };
//     for (let i = 0; i <= num.length -1; i++) {
//         if (num.length === 1) {
//                 if (converter[num[i]] === undefined){
//                     str += num[i];
//                 }else {
//                     str += converter[num[i]];
//                 }
//         } else if (num.length === 2) {
//             if (converter[num[i]] === undefined){
//                 str += num[i];
//             }else {
//                 str += converter[num[i] + i++];
//                 str += ' ';
//                 str += converter[num[i]];
//             }
//
//         } else if (num.length === 3) {
//             if (converter[num[i]] === undefined){
//                 str += num[i];
//             }else {
//                 str += converter[num[i] + i + i++];
//                 str += ' ';
//                 str += converter[num[i] + i++ - 1];
//                 str += ' ';
//                 str += converter[num[i]];
//             }
//
//         } else {
//             console.log('no');
//         }
//
//     }
//     return str;
// }
//
// console.log(numbers(666));
















