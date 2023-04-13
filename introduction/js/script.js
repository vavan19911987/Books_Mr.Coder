"use strict";

//"Основы работы с контекстом в JavaScript"//
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
//
// function parent() {
//     console.log(this.value); // что выведет?
//     let self = this;
//
//     function child() {
//         console.log(self.value); // что выведет?
//     }
//
//     child();
// }
// Пусть дан такой код:
//     <input id="elem" value="3">
//
// Автор кода хотел, чтобы по потери фокуса на экран
// вывелся квадрат числа из value инпута. Однако, почему-то
// при потери фокуса в консоль выдается ошибка. Исправьте ошибку
// автора кода. Напишите текст, в котором вы дадите объяснение
// автору кода, почему возникла его ошибка.

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
//
// function func() {
//     let self = this;
//     console.log(square());
//     function square() {
//         return self.value * self.value;
//     }
//     square()
// }
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
//
// function func() {
//     square(this);
//
//     function square(param) {
//         console.log(param.value * param.value)
//     }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//     let  square = () => {
//         console.log(this.value * this.value)
//     }
//     square();
// }


// Дана функция:
// Даны три инпута:
// <input id="elem1" value="text1">
//     <input id="elem2" value="text2">
//         <input id="elem3" value="text3">
//                 С помощью метода call и функции func выведите на экран value каждого из инпутов.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
//
// function func() {
//     console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

// Пусть дан следующий код:
//
//     <input id="elem" value="hello">
//
// тут должно вывести 'hello, John Smit'
// Добавьте в последнюю строчку метод call так,
// чтобы на экран вывелось 'hello, John Smit'.
// Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');
//
// function func(name, surname) {
//     console.log(this.value + ', ' + name + ' ' + surname);
// }
//
// func.call(elem,'John','Smit');

// Пусть дан следующий код:
// Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.
// <input id="elem" value="привет">
// let elem = document.getElementById('elem');
// function func(name, surname) {
//     console.log(this.value + ', ' + name + ' ' + surname);
// }
// // тут напишите конструкцию с bind()
// let newFunc = func.bind(elem,'John', 'Smit'); // тут должно вывести 'hello, John Smit'
// let newFunc2 = func.bind(elem,'Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'
// newFunc();
// newFunc2();























