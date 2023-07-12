'use strict'

// ПОВТОР Контекст//

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
//
// function parent() {
// 	console.log(this); // выведет
// 	//ссылку на наш инпут
//
// 	function child() {
// 		console.log(this); // выведет
// 		//undefined
// 	}
// 	child();
// }

// Пусть дан такой код:
// 	<input id="elem" value="3">
// 		"use strict";

// let elem = document.querySelector('#elem')
// elem.addEventListener('blur', func)
//
// function func () {
// 	let self = this
// 	function square () {
// 		return self.value * self.value
// 	}
// 	console.log(square())
// }

// Автор кода хотел, чтобы по потери фокуса на экран
// вывелся квадрат числа из value инпута.
// Однако, почему-то при потери фокуса в консоль
// выдается ошибка. Исправьте ошибку автора кода.
// Напишите текст, в котором вы дадите объяснение автору кода,
// почему возникла его ошибка.

// Возьмите код из предыдущей задачи и исправьте
// проблему кода с помощью изученного второго способа.

// let elem = document.querySelector('#elem')
// elem.addEventListener('blur', func)
//
// function func () {
// 	console.log(square(this))
// 	function square (par) {
// 		return par.value * par.value
// 	}
//
// }

// Возьмите код из предыдущей задачи
//и исправьте проблему кода с помощью изученного третьего способа.

// let elem = document.querySelector('#elem')
// elem.addEventListener('blur', func)
//
// function func () {
// 	let square = () =>  {
// 		console.log(this.value * this.value)
// 	}
// 	square()
// }

// Дана функция:
// Даны три инпута:

// <input id="elem1" value="text1">
// <input id="elem2" value="text2">
// <input id="elem3" value="text3">
// С помощью метода call и функции func
// выведите на экран value каждого из инпутов.
// let el1 = document.querySelector('#elem1')
// let el2 = document.querySelector('#elem2')
// let el3 = document.querySelector('#elem3')
//
// function func () {
// 	console.log(this.value)
// }
//
// func.call(el1)
// func.call(el2)
// func.call(el3)

// Пусть дан следующий код:
// <input id="elem" value="hello">

//Добавьте в последнюю строчку метод call так,
// чтобы на экран вывелось 'hello, John Smit'.
// Слово 'hello' должно взяться из value инпута, а
// 'John' и 'Smit' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
// 	func.call(elem,'Smit','John')
// })
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func.call(elem,'Smit','John');

// Пусть дан следующий код:
// <input id="elem" value="hello">

//Добавьте в последнюю строчку метод call так,
// чтобы на экран вывелось 'hello, John Smit'.
// Слово 'hello' должно взяться из value инпута, а
// 'John' и 'Smit' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');
// let arr = ['Smit','John']
// elem.addEventListener('blur', () => {
// 	func.apply(elem,arr)
// })
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func.call(elem,'Smit','John');

// Пусть дан следующий код:
// 	<input id="elem" value="привет">

// Напишите в указанном месте конструкцию
// с методом bind так, чтобы this внутри функции
// func всегда указывал на инпут из переменной elem
// let elem = document.getElementById('elem')
//
// function func (name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname)
// }
//
// // тут напишите конструкцию с bind()
//
// let newFunc = func.bind(elem) // тут должно вывести 'hello, John Smit'
// let nowFunc = func.bind(elem) // тут должно вывести 'hello, Eric Luis'
// newFunc('John', 'Smit')
// nowFunc('Eric', 'Luis')






























