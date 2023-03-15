"use strict";

//"Деструктуризация"

// В следующем коде части массива записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
//
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// console.log(arr);

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name,surname, department, position, salary] = arr;
// console.log(name,surname,department,position,salary);

// В следующем коде части массива записываются в соответствующие переменные:
//
//     function func() {
//         return ['John', 'Smit', 'development', 'programmer', 2000];
//     }
//
// let arr = func();
//
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

// Переделайте этот код через деструктуризацию согласно изученной теории.
//
// function func() {
//     return ['John', 'Smit', 'development', 'programmer', 2000];
// }
// let [name, surname, department, position, salary] = func();
// console.log(func());

// В следующем коде части массива записываются в соответствующие переменные:
//     Переделайте этот код через деструктуризацию согласно изученной теории.

//     let arr = ['John', 'Smit', 'development', 'programmer', 2000];
//     let [, , department,position, ,] = arr;
// console.log(position);

// В следующем коде части массива записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...res] = arr;
// let info = arr.slice(2); // все элементы со второго до конца массива
// console.log(name, surname, info);

// В следующем коде части массива записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['John', 'Smit', 'development'];
// let [name, surname, department,position = 'trainee'] = arr;
// console.log(position);

// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца
// по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.
// let arrData = [];
// function func1() {
//     return (new Date).getDate();
// }
// function func2() {
//     return (new Date).getMonth();
// }
// function func3() {
//     return (new Date).getFullYear();
// }
//     let [day = func1(), month = func2(), year = func3()] = arrData;
//
//     console.log(day,month,year);

//
// В следующем коде части объекта записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
//     color: 'red',
//     width:  400,
//     height: 500,
// };
// let {color, width, height} = options;
// console.log(color,width,height);

// В следующем коде части объекта записываются в соответствующие переменные:
    // Переделайте этот код через деструктуризацию согласно изученной теории.

//     let options = { // стало
//         color: 'red',
//         width:  400,
//         height: 500,
//     };
// let {color: c, width: w, height: h} = options;
// console.log(c,w,h);

// В следующем коде части объекта записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

//     let options = {
//         width:  400,
//         height: 500,
//     };
// let {color = 'bleak', width, height} = options; // деструктуризация
// // let color;
//
// // if (options.color !== undefined) {
// //     color = options.color;
// // } else {
// //     color = 'black';
// // }
// //
// // let width  = options.width;
// // let height = options.height;
// console.log(color,width,height);

// В следующем коде части объекта записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.
// let options = {
//     width:  400,
//     height: 500,
// };
// let {color: c = 'red',width: w,height: h} = options;// деструктуризацию
// // let с;
// // if (options.с !== undefined) {
// //     с = options.color;
// // } else {
// //     с = 'black';
// // }
// //
// // let w = options.width;
// // let h = options.height;
// console.log(c,w,h);

// Переделайте следующий код через деструктуризацию согласно изученной теории:
let arr = ['John', 'Smit', 'development', 'programmer',];
    function func([name,surname,department,position,salary = 20]) {
        // let [name,surname,department,position,salary = 20] = employee;
        console.log(arr);
    }
    func();

// // Переделайте следующий код через деструктуризацию согласно изученной теории:
//     function func(employee) {
//         let arr = ['John', 'Smit', 'development'];
//
//         let [name,surname,info,position = 'cook',] = employee;
//         return employee;
//     }
//
// console.log(func());










