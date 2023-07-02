'use strict'

// ПОВТОР Время с новыми фишками//

// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Используйте для всех частей даты (кроме года) созданную
// нами функцию для добавления нуля при необходимости.

// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }
// let date = new Date();
//
// console.log(
// 	addZero(date.getHours()) + ':' +
// 	addZero(date.getMinutes()) + ':' +
// 	addZero(date.getSeconds()) + ':' + ' ' +
// 	addZero(date.getFullYear()) + '-' +
// 	addZero(date.getMonth() + 1) + '-' +
// 	addZero(date.getDate())
// );

// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

// let data = '2023.07.01';
// let newDataFormat = data.split('.').reverse().join('.');
// console.log(newDataFormat)

// Выведите на экран номер текущего дня недели.
// let date = new Date();
// console.log(date.getDay());
// Определите, является ли текущий день недели выходным или рабочим днем.

// function dayOff(numDay) {
// 	if (numDay >= 0 && numDay <= 5) {
// 		console.log('working day');
// 	} else {
// 		console.log('Day off');
// 	}
// }
// let date = new Date()
// dayOff(date.getDay())

// Определите сколько дней осталось до ближайшего воскресенья.
// let date = new Date()
// function whenSunday() {
// 	return 7 - date.getDay();
// }
// console.log(whenSunday());

// Пусть дан следующий массив:
// Выведите с помощью этого массива название текущего месяца.
// let data = new Date();
// let mont = data.getMonth() + 1;
// let months = [
// 	'дек', 'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя',
// ]
// console.log(months[mont]);
// console.log(mont)

// Узнайте, какой день недели был в ваш день рождения.
// let date = new Date(1991, 0, 20);
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

// function determiningDayWeek (data) {
// 	let day  = data.getDay();
// 	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }
// let result = determiningDayWeek(new Date(1991, 0, 20));
// console.log(result);
// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
// let now  = new Date(1998, 0, 1);
// let date = new Date(2000, 0, 1);
//
// let diff = date.getTime() - now.getTime();
// console.log(diff / (1000 * 60 * 60 * 24));

// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

// let now  = new Date(1991, 0, 20);
// let date = new Date();
//
// let diff = date.getTime() - now.getTime();
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 30)));

// Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

// let oldData = new Date(2000, 1, 1);
// let oldData2 = new Date(2010, 1,1);
// let diff = oldData2 - oldData;
// console.log(diff);
// // Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24) ) + ' Day');
//
// // Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) + ' Month');
//
// // Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12)) + ' Year');

// Оформите этот способ решения проблемы в виде функции,
// которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.
// function lastMonthNumber (year,month) {
// 	return new Date(year, month, 0);
//
// }
// let lastDay = lastMonthNumber(2023,2);
// console.log(lastDay.getDate());

// Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.

// function isLeap(year) {
// 	let data = new Date(year, 2,0);
// 	// if (data.getDate() >= 29) {
// 	// 	return 'Год високосный';
// 	// } else {
// 	// 	return 'Год не високосный';
// 	// }
// 	return  data.getDate() ? 'Год високосный' :  'Год не високосный';
// }
// let res = isLeap(2023);
// console.log(res)

// Сделайте функцию checkDate, которая будет выполнять описанную проверку.
// Пусть функция возвращает true, если дата корректна и false, если нет.
// Пример работы этой функции для 31 января и 32 января:

// function checkDate (year, month, day) {
// 	let date = new Date(year, month, day)
// 	return !!(date.getFullYear() === year && date.getMonth() === month && date.getDate() === day);
// }
//
// console.log(checkDate(2025, 0, 31)) // выведет true
// console.log(checkDate(2025, 0, 32)) // выведет false

// Определите, какой день недели будет 31 декабря текущего года.

// let now = new Date();
// let date = new Date(now.getFullYear(), 0, 31);
// console.log(date.getDay());

// let now  = new Date();
// let year = now.getFullYear();
//
// for (let month = 0; month <= 11; month++) {
// 	let date = new Date(year, month, 1);
//
// 	if (date.getDay() === 0) {
// 		console.log(year + '-' + month + '-1');
// 	}
// }










