"use strict";

//"ВРЕМЯ ДАТА"


// let date = new Date();
// console.log(date.getFullYear()); // год
// console.log(date.getMonth() + 1);    // месяц
// console.log(date.getDate());     // день
// console.log(date.getDay()); // день недели
//
// console.log(date.getHours());    // часы
// console.log(date.getMinutes());  // минуты
// console.log(date.getSeconds());  // секунды

// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
//     Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
// let date = new Date();
// function addZero(num) {
//     if (num >= 0 && num < 9) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes() + ':' + addZero(date.getSeconds())));
// console.log(addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1  + '.' + addZero(date.getFullYear())));

// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

// let dateStr = '2023-03-15';
// let arrData = dateStr.split('-').reverse();
// let [year,month,day] = arrData;
// let res = year + '.' + month + '.' + day;
// console.log(res);

// Определите, является ли текущий день недели выходным или рабочим днем.

// let date = new Date();
// function data() {
//     if (date.getDay() > 0 && date.getDay() < 6) {
//         console.log('рабочий день');
//     }else  {
//         console.log('выходной');
//     }
// }
// data();

// Определите сколько дней осталось до ближайшего воскресенья.

// let date = new Date();
// function data() {
//     if (date.getDay()) {
//         console.log(7 - date.getDay());
//     }
// }
// data();

// let date = new Date();
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day] + '-' + date.getDate());
// // Пусть дан следующий массив:
// // Выведите с помощью этого массива название текущего месяца.
// let month = date.getMonth();
// let months = [
//     'янв', 'фев', 'мар', 'апр', 'май', 'июн',
//     'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// console.log(months[month]);

// Узнайте, какой день недели был в ваш день рождения.
// let date = new Date(2023, 0, 20);
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);
// Выведите на экран timestamp, соответствующий дате 1 января 2025 года.
// let date = new Date(2025,0,1);
// console.log(date.getTime());


// let now  = new Date();
// let date = new Date(2015, 11, 4, 23, 59, 59);
//
// let diff = now.getTime() - date.getTime();
// console.log(diff);
// console.log(diff / (1000 * 60))
// console.log(diff / (1000 * 60 * 60));
// console.log(diff / (1000 * 60 * 60 * 60));

// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
// let now  = new Date(1988,2,1);
// let date = new Date(2000, 0, 10);
// let diff = date.getTime() - now.getTime();
// console.log(diff);
// console.log(diff / (1000 * 60 * 60 * 60)); // day

// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
// let now  = new Date();
// let date = new Date(1991, 0, 20); // введите свою дату рождения год-месяц-день где месяц начинается с нуля то есть январь это нулевой а феврвль первый
// let diff = now.getTime() - date.getTime();
// console.log(diff); // Милисекунды
// console.log(Math.floor(diff / (1000 % 60))); // секунды
// console.log(Math.floor(diff / (1000 * 60))); // минуты
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24))); // day
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 30))); // месяцев
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))); // year

// Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
// let now = new Date(2010,1,15);
// let date = new Date(2000,8,1)
// let diff = now - date;
// console.log(diff);
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.
// let now = new Date(2010,1,15);
// let date = new Date(2000,8,1)
// let diff = now - date;
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24)));



// let date2 = new Date(2018, 1, 0); // указываем нулевой день и получаем количество дней пред идушего месяца
// console.log(date2.getDate());
// let date = new Date(2020, 2, 0);
// console.log(date.getDate());
// Оформите этот способ решения проблемы в виде функции, которая
// параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.
// function data(year,month) {
//     return new Date(year, month,0).getDate();
// }
// console.log(data(2023,3));
//
// const daysInMonth = (y ,m) => (new Date(y, m, 0)).getDate();
// console.log(daysInMonth(2023,3))

// Определите, какой день недели будет в последнем дне пятого месяца 2025 года

// function data(year,month) {
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let now = new Date(year, month,0);
//         let day  = now.getDay();
//         return days[day];
// }
// console.log(data(2023,3));
// Сделайте функцию isLeap, которая параметром будет принимать год
// и возвращать true, если этого год високосный, и false - если нет.

// const monthAfterFebruaryNumber = 2;
// const maxDaysInFebruary = 29;
// let isLeap = (y) => (new Date(y, monthAfterFebruaryNumber, 0)).getDate() === maxDaysInFebruary;
// console.log(isLeap(2020));

// let year  = 2025;
// let month = 0;
// let day   = 32;
//
// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
//     console.log('корректна');
// } else {
//     console.log('некорректна');
// }

// Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true,
//     если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:

// function checkDate(year,month,day) {
//     let date = new Date(year, month, day);
//     return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
// }
// console.log(checkDate(2023,2 + 1,16)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false

// Определите, какой день недели будет 31 декабря текущего года.
// let now  = new Date();
// let date = new Date(now.getFullYear(), 11, 31);
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let dayWeek = date.getDay();
// console.log(days[dayWeek]);

// Определите, какой день недели будет 1 числа текущего месяца.
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 1);
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let dayWeek = date.getDay();
// console.log(days[dayWeek] + ' ' + date.getDate());
// Давайте найдем все первые числа месяцев текущего года, которые являются воскресеньем:
// let now  = new Date();
// let year = now.getFullYear();
//
// for (let month = 0; month <= 11; ++month) {
//     let date = new Date(year, month - 1, 1);
//
//     if (date.getDay() === 0) {
//         console.log(year + '-' + month + '-1');
//     }
// }

// Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом
// промежутке попадало на выходной день, то есть на субботу или на воскресенье.
// let nowYear = new Date().getFullYear();
// let firstJanuaryDates = []
// let backYear = new Date(2000,0,1).getFullYear();
// for (let year = backYear; year <= nowYear; year++) {
//     firstJanuaryDates.push(new Date(year,0,1))
// }
// let dayOff = firstJanuaryDates.map(function (date) {
//         if (date.getDay() > 5) {
//             return firstJanuaryDates;
//         }
// })
// let res = dayOff.filter(Boolean).length;
// console.log(res)

// const nowYear = (new Date()).getFullYear();
// let firstJanuaryDates = []
// for (let y = 2000; y <= nowYear; y++) {
//     firstJanuaryDates.push(new Date(y, 0, 1))
// }
// const res = firstJanuaryDates.map(date => date.getDay() > 5).filter(Boolean).length;
// console.log(res)

// ПРАКТИКА

// Определите, сколько секунд прошло с начала дня до настоящего момента времени.
// let now = new Date();
// let backDate = new Date(2000,0,1);
// console.log(now - backDate);

// Определите, сколько секунд осталось до конца дня.

// let now = new Date();
// let backDate = new Date(now.getFullYear(),now.getMonth(),now.getDate() + 1);
// let lost = backDate - now;
// console.log(Math.floor(lost / (1000 * 60 * 60)));

// Определите, сколько дней осталось до нового года.

// let now = new Date();
// let upDate = new Date(now.getFullYear(), 11, 31);
// let res = upDate - now;
// console.log(Math.floor(res / (1000 * 60 * 60 * 24)));

// let now = new Date();
// let upDate = new Date(now.getFullYear(), 11, 31 + 1);
// function dayBeforeYear(now,upDate) {
//     return upDate - now;
// }
// let res = dayBeforeYear(now,upDate);
// console.log(Math.floor(res / (1000 * 60 * 60 * 24)));

// let now = new Date();
// let resData =  new Date(now.getFullYear(), 11, 31 + 1) - now;
// let res = () => Math.floor(resData / (1000 * 60 * 60 * 24));
// console.log(res());

// const now = new Date();
// const resData =  new Date(now.getFullYear(), 11, 31 + 1);
// const diffTime = Math.abs(resData - now);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffDays); // с подсчётом високосного

// Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.

// function dateOfBirth(brith) {
//     if (brith >= '03.21' && brith <= '04.20') {
//         return 'Овен';
//     } else if (brith >= '04.21' && brith <= '05.21') {
//         return 'Телец';
//     } else if (brith >= '05.22' && brith <= '06.21') {
//         return 'Близнецы';
//     } else if (brith >= '06.22' && brith <= '07.22') {
//         return 'Рак';
//     } else if (brith >= '07.23' && brith <= '08.23') {
//         return 'Лев';
//     } else if (brith >= '08.24' && brith <= '09.22') {
//         return 'Дева';
//     } else if (brith >= '09.23' && brith <= '10.23') {
//         return 'Весы';
//     } else if (brith >= '10.24' && brith <= '11.22') {
//         return 'Скорпион';
//     }  else if (brith >= '11.23' && brith <= '12.21') {
//         return 'Стрелец';
//     } else if (brith >= '12.22' && brith <= '01.20') {
//         return 'Козерог';
//     } else if (brith >= '01.21' && brith <= '02.18') {
//         return 'Водолей';
//     } else if (brith >= '02.29' && brith <= '03.20') {
//         return 'Рыбы';
//     }
// }
// console.log(dateOfBirth('03.10'));










