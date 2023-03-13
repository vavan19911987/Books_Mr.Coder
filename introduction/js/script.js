"use strict";

//"Продвинутая теория на функции"


// Сделайте функцию func, которая будет возвращать через return какую-либо строку.
//
// function func(name) {
//     return name;
// }
// console.log(func('Vladimir'));


// Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.

// function func(name) {
//     return name;
// }
// console.log(func('Vladimir'));
// func = 123; //затирание функции
// console.log(func);

// Сделайте функцию func1, которая будет возвращать через return число 3.

// function func1() {
//     return 3;
// }

// console.log(func1(3))

// Скопируйте исходный код функции func1, в переменную func2.

// let func2 = func1;

// Выведите в консоль сумму результатов работы функций func1 и func2.

// let sumFun = func2() + func1();
//
// console.log(sumFun);

// Сделайте безымянную функцию, которая будет возвращать через return число 1.
// Запишите эту функцию в переменную func1.
// Сделайте безымянную функцию, которая будет возвращать через return число 2.
// Запишите эту функцию в переменную func2.

// let fun1 = function () {
//     return 1;
// }
// let fun2 = function () {
//     return 2;
// }
//
// console.log(fun1() + fun2());


// Сделайте массив arr с тремя функциями.
//     Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.

// let arrFun = [
//     function () {return 1;},
//     function () {return 2;},
//     function () {return 3;}
// ];
// Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.

// console.log(arrFun[2]());

// Используя созданный вами массив arr найдите сумму результатов функций (без цикла).

// let sumFunArr = arrFun[0]() + arrFun[1]() + arrFun[2]();
// console.log(sumFunArr);

// Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.

// for (let fun of arrFun) {
//     console.log(fun());
// }


// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
// С помощью созданных функций выведите в консоль сумму возвращаемых чисел.

// let objFun = {
//     'fun1': function (){return 1;},
//     'fun2': function (){return 2;},
//     'fun3': function (){return 3;},
// }
// let sumObjFun = objFun.fun1() + objFun.fun2() + objFun.fun3();
// console.log(sumObjFun);

// Переберите созданный объект циклом и выведите результаты работы функций в консоль.

// for (let key in objFun) {
//     console.log(objFun[key]());
// }


// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.
//     Сделайте так, чтобы первая функция возвращала сумму элементов массива,
//     вторая функция - сумму квадратов, а третья - сумму кубов.
// let objFun = {
//     'fun1': function (arrNum){
//         let sumFun1 = 0;
//         for (let key of arrNum) {
//             sumFun1 += key;
//         }
//         return sumFun1;
//     },
//     'fun2': function (arrNum){
//         let sumFun2 = 0;
//         for (let key of arrNum) {
//             sumFun2 += key * 2;
//         }
//         return sumFun2;
//     },
//     'fun3': function (arrNum){
//         let sumFun3 = 0;
//         for (let key of arrNum) {
//             sumFun3 += key * key * key;
//         }
//         return sumFun3;
//     },
// }
// console.log(objFun.fun1([1, 2, 3]));
// console.log(objFun.fun2([2, 2]));
// console.log(objFun.fun3([2, 3]));

// Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1,
// вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.

// function test(fun1,fun2,fun3) {
//     console.log(fun1() + fun2() + fun3());
// }
//
// test(
//     function (){return 1;},
//     function (){return 2},
//     function (){return 3}
// )
// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

// function test(fun1,fun2,fun3) {
//     console.log(fun1() + fun2() + fun3());
// }

// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
//     Пусть первая функция возвращает 1, вторая - 2, а третья - 3.
// Передайте эти функции параметром в функцию test из предыдущей задачи.


//     function get1(){return 1;}
//     function get2(){return 2;}
//     function get3(){return 3;}
//

// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

// let get1 = function (){return 1;};
// let get2 = function (){return 1;};
// let get3 = function (){return 1;};
//
// test(get1,get2,get3);

// Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию,
//     которая параметром будет принимать число и возвращать его куб.

// test(function(num) {
//     return num * 2;
// });
//
// function test(func) {
//     console.log(func(3));
// }
// Переделайте ваш код так, чтобы передаваемая функция была не анонимной,
//     а была определена как Function Declaration с именем func.

// function func(num) {
//     return num * 2;
// };
// function test(func) {
//     console.log(func(3));
// }
// test(func);

// Переделайте передаваемую функцию на Function Expression с тем же именем func.

// let func = function(num) {
//     return num * 2;
// };
// function test(func) {
//     console.log(func(3));
// }
// test(func);

// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму.
//     При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3.
// Выведите алертом результат.

// function func(num,num2) {
//     return num + num2;
// }
// function test(func) {
//     return func;
// }
// console.log(test(func(2,3)));


// Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции,
//     также параметром принимающие числа.
//     Пусть функция test возвращает сумму результатов переданных функций:

// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую
// число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.

// function test(num, func1, func2) {
//     return func1(num) + func2(num);
// }
// console.log(test(3,function (num){return num * 2;},function (num2){return num2 * num2 * num2;}));

// Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.

// function test(arr,func) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }
//
// let result = test([1,2,3],function (num) {return num ** 2;});
//
//
// console.log(result);

// Сделайте функцию func, которая параметрами будет принимать два числа,
//     а возвращать сумму квадрата первого числа с кубом второго числа.
//     Сделайте для этого вспомогательную функцию square, возводящую число в квадрат,
//     и вспомогательную функцию cube, возводящую число в куб.

// function funcNum(num1,num2) {
//     function square(num) {
//         return num * 2;
//     }
//     function cube(num) {
//         return num ** 3;
//     }
//     return square(num1) + cube(num2);
// }
// console.log(funcNum(2,3));

// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1.
// Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

// function func1() {
//     return function (){
//         return 5;
//     }
// }
// function func2() {
//     return function () {
//         return 5;
//     }
// }
// function funcSum(num1,num2) {
//     return num1 + num2;
// }
// console.log(funcSum(func1()(),func2()()));

// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

// function str() {
//     return function () {
//         return function () {
//             return function () {
//                 return function () {
//                     return 'меня вернули';
//                 }
//             }
//         }
//     }
// }
//
// console.log(str()()()()());


// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// function sumFun(num) {
//     return function (num2) {
//         return function (num3) {
//             return num + num2 + num3;
//         }
//     }
// }
//
// console.log(sumFun(2)(3)(4));


// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

// function funcArr(num1) {
//     return function (num2) {
//         return function (num3) {
//             return function (num4) {
//                 return function (num5) {
//                     return function () {
//                         let arr = [];
//                         arr.push(num1,num2,num3,num4,num5);
//                         return arr;
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(funcArr(1)(2)(3)(4)(5)());



// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

// function bum() {
//     let num = 0;
//     return function () {
//         ++num;
//         return num;
//     }
// }
//  let test1 = bum();
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// let test2 = bum();
// console.log(test2());
// console.log(test2());
// console.log(test2());
// console.log(test2());

// Пусть функция в замыкании хранит число 10. Сделайте так,
//     чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.


// function numFunc(nums) {
//     let num = 10;
//     return function () {
//         num--;
//         return num + nums;
//     }
// }
// let test1 = numFunc(11);
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());

// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый
// последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.

// function numFunc(str) {
//     let num = 10;
//     return function () {
//         num--;
//         if (num <= 0) {
//             return str;
//         }
//         return num;
//     }
// }
// let test1 = numFunc('отсчет окончен');
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());
// console.log(test1());


// Допишите следующий код так, чтобы его запуск алертом выводил '!':

// (function() {
//     return function () {
//         return function () {
//             console.log('!');
//         }
//     }
// })()()();
// пишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

    // (function(num1) {
    //     return function (num2) {
    //         return function () {
    //             console.log(num1 + num2)
    //         }
    //     }
    // })(1)(2)();

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

    // (function(num1) {
    //     return function (num2) {
    //         return function (num3) {
    //             return function () {
    //                 console.log(num1 + num2 + num3);
    //             }
    //         }
    //     }
    // })(1)(2)(3)();

// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.

// let func = (function () {
//     let num = 0;
//     return function () {
//         ++num;
//         return num;
//     }
// })();
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

// Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

// let func = (function () {
//     let num = 0;
//     return function () {
//         if (num >= 5) {
//             num = 0;
//         }
//         ++num;
//         return num;
//     }
// })();
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());


// Функции-коллбэки в JavaScript

// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
// function each(arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push(callback(elem));
//     }
//     return result;
// }
// let res = each([1,2,3,4,5,], function (arrNum) {
//     return arrNum ** 2;
// })
// console.log(res);

// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
// function each(arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push(callback(elem));
//     }
//     return result;
// }
// let arrStr = each(['rimidalv', 'nilup'], function (revers) {
//      return revers;
// });
// for (let i = 0; i < arrStr.length; i++) {
//     arrStr[i] = arrStr[i].split('').reverse().join('');
//     // перевертывание символов строки
//     // arrStr[i] = arrStr[i].split(''); // первый этап
//     // console.log(arrStr[i]);
//     // arrStr[i] = arrStr[i].split('').reverse(); // второй этап
//     // console.log(arrStr[i]);
//     // arrStr[i] = arrStr[i].split('').reverse().join(''); // третий этап
//     // console.log(arrStr[i]);
//     arrStr[i] =  arrStr[i].slice(0,1).toUpperCase() + arrStr[i].slice(1);
//     // делаем заглавную букву каждой строки
//     // arrStr[i] =  arrStr[i].slice(0,1); // первый этап
//     // console.log(arrStr[i]);
//     // arrStr[i] =  arrStr[i].slice(0,1).toUpperCase(); // второй этап
//     // console.log(arrStr[i]);
//     // arrStr[i] =  arrStr[i].slice(0,1).toUpperCase() + arrStr[i]; // третий этап
//     // console.log(arrStr[i]);
//     // arrStr[i] =  arrStr[i].slice(0,1).toUpperCase() + arrStr[i].slice(1); // четвертый этап
//     // console.log(arrStr[i]);
// }
// console.log(arrStr);



// С помощью следующей функции возведите все элементы массива в куб:
// Коллбэки не обязательно должны быть анонимными функциями
// function each(arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push(callback(elem));
//     }
//     return result;
// }
// function cube(num) {
//     return num ** 3;
// }
// let res = each([1,2,3,4,], cube)
//
// console.log(res)

// Дана следующая функция с коллбэком:
// Упростите коллбэк через стрелочную функцию.

// function every(arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push(callback(elem));
//     }
//     return result;
// }
//
//     let result = every([-1, 2, 3, 4, 5], function(elem) {
//         if (elem > 0) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//
// let result2 = every([-1, 2, 3, 4, 5], elem => elem > 0);
//
// console.log(result);
// console.log(result2);

// Дана следующая функция с коллбэком:Упростите коллбэк через стрелочную функцию.

// function every(arr, callback) {
//     let result = [];
//     for (let i in arr) {
//         const elem = arr[i];
//         result.push(callback(elem, i));
//     }
//     return result;
// }
// let result = every([1, 2, 3, 4, 5], function(elem, index) {
//     if (elem * index > 10) {
//         return true;
//     } else {
//         return false;
//     }
// });
// let result2 = every([1, 2, 3, 4, 5], (elem,index) => elem * index > 10); // упрощение.
// console.log(result2)
// console.log(result);

//РЕКУРСИЯ//

// let i = 1;
//
// function func(){
//     console.log(i);
//     i++;
//
//     if (i <= 10){
//         func(); // здесь функция вызывает сама себя
//     }
// }
// func();


// function func(arr) {
//     console.log(arr.shift(), arr);
//
//     if (arr.length != 0) {
//         func(arr);
//     }
// }
//
// func([1, 2, 3]);

// Дан массив:
// С помощью рекурсии выведите элементы этого массива в консоль.
// let arr = [1, 2, 3, 4, 5];
// function funNum(arr) {
//     console.log(arr.shift(),arr);
//     if (arr.length != 0) {
//         funNum(arr);
//     }
// }
// funNum(arr);


// Дан массив:С помощью рекурсии найдите сумму квадратов элементов этого массива.

// let arr = [1, 2, 3, 4, 5];
// function every(arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push(callback(elem));
//     }
//     return result;
// }
// let resSum = every(arr, num => num ** 2);
// function getSum(arr) {
//     let sum = arr.shift();
//     if (arr.length !== 0) {
//         sum += getSum(arr);
//     }
//     return sum;
// }
// console.log(getSum(resSum));

// let arr = [1, 2, 3, 4, 5];
// function cube() {
//     let sum = 0;
//     let arrCube = [];
//     for (let i = 0; i < arr.length; i++) {
//         sum = arr[i] ** 2;
//         arrCube.push(sum);
//     }
//     return arrCube;
// }
// function getSum(arr) {
//     let sum = arr.shift();
//     if (arr.length !== 0) {
//         sum += getSum(arr);
//     }
//     return sum;
// }
// console.log(getSum(cube(arr)));

// let arr = [1, 2, 3, 4, 5];
// function getSum(arr) {
//     let sum = arr.shift() ** 2;
//     if (arr.length !== 0) {
//         sum += getSum(arr);
//     }
//     return sum;
// }
// console.log(getSum(arr));

// Дан массив многомерный произвольного уровня вложенности, например, такой

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]],]];
// function func(arr) {
//     for (let elem of arr) {
//         if (typeof elem === 'object') {
//             func(elem);
//         } else {
//             console.log(elem);
//
//         }
//     }
// }
// func(arr);

// Дан многомерный объект произвольного уровня вложенности, например, такой:
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
//
// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3,
//         e: 4
//     },
//     f: {
//         g: 5,
//         j: 6,
//         k: {
//             l: 7,
//             m: {
//                 n: 8,
//                 o: 9
//             }
//         }
//     }
// }
//
// function objFun(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             objFun(obj[key]);
//         }else {
//             console.log(obj[key]);
//
//         }
//     }
// }
// objFun(obj);

// Дан многомерный массив произвольного уровня вложенности, например, такой:
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
//     [1, 2, 7, 8, 3, 4, 5, 6, 7]

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let arr2 = [];
// function funRecArr(arr) {
//     for (let elem of arr) {
//         if (typeof elem === 'object') {
//             funRecArr(elem);
//         } else {
//            arr2.push(elem);
//         }
//     }
// }
// funRecArr(arr);
// console.log(arr2);

// Давайте найдем сумму примитивных элементов нашего массива:
//     function func(arr) {
//         let sum = 0;
//         for (let elem of arr) {
//             if (typeof elem == 'object') {
//                 sum += func(elem);
//             } else {
//                 sum += elem;
//             }
//         }
//         return sum;
//     }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// Дан многомерный объект произвольного уровня вложенности, например, такой:
// С помощью рекурсии найдите сумму элементов этого объекта.

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// function sumObj(obj) {
//     let objSum = 0;
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//            objSum += sumObj(obj[key]);
//         }else {
//             objSum += obj[key];
//         }
//     }
//     return objSum;
// }
// console.log(sumObj(obj));

// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
// С помощью рекурсии слейте элементы этого массива в одну строку:
//     'abcdefgjk'

// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// function strArr(arr) {
//     let arrStr = '';
//     for (let elem of arr) {
//         if (typeof elem === 'object') {
//            arrStr += strArr(elem);
//         } else {
//             arrStr += elem;
//         }
//     }
//     return arrStr;
// }
// console.log(strArr(arr));

// Дан многомерный массив произвольного уровня вложенности, например, такой:
// Возведите все элементы-числа этого массива в квадрат.

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
//
// function cubeArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'object') {
//             arr[i] = cubeArr(arr[i]);
//         } else {
//             arr[i] = arr[i] ** 2;
//         }
//     }
//     return arr;
// }
// console.log(cubeArr(arr));
















