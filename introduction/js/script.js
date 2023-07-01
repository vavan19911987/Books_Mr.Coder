'use strict'

// ПОВТОР Деструктуризация с новыми фишками//

// В следующем коде части массива записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary] = arr;
//
// console.log( surname);

// В следующем коде части массива записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000, 2];
// }
//
// let [name, surname, department, position, salary] = func();
//
// console.log(surname);

// В следующем коде части массива записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [,, department, position] = arr;
// console.log(department);

// В следующем коде части массива записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...res] = arr;
// console.log(res);
// console.log(name);

// В следующем коде части массива записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['John', 'Smit', 'development', 'development-pogrammer'];
// let [name, surname, department, position = 'programmer'] = arr;
// console.log(name);
// console.log(position);

// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве
// значения для месяца по умолчанию брался текущий месяц,
// а при отсутствии значения для года - соответственно текущий год.

// function func () {
// 	return new Date().getFullYear()
// }
//
// let arr = []
//
// let [year = func(), month = func(), day = func()] = arr
// console.log(month)

// В следующем коде части объекта записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color, width, height} = options;
// console.log(width);
// console.log(color);
// console.log(height);


// В следующем коде части объекта записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color: c, width: w, height: h} = options;
// console.log(c);
// console.log(w);
// console.log(h);

// В следующем коде части объекта записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color = 'black', width, height} = options;
// options['color'] = color;
// console.log(options)

// В следующем коде части объекта записываются в соответствующие переменные:
// Переделайте этот код через деструктуризацию согласно изученной теории.
//
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width, height} = options;
// console.log(c)
// console.log(options)

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// 	function func([name, surname, department, position, salary]) {
// 		console.log(name);
// 		console.log(surname);
// 		console.log(department);
// 		console.log(position);
// 		console.log(salary);
// 	}
//
// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// 	function func([name,surname,info]) {
// 		console.log(name);
// 		console.log(surname);
// 		console.log(info);
// 	}
//
// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name,surname,department, position = 'Джуниор']) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(department);
// 	console.log(position);
// }
//
// func( ['John', 'Smit', 'development'] );


// Переделайте следующий код через деструктуризацию согласно изученной теории:

// 	function func(department,[name,surname],[year, month, day]) {
// 		console.log(department);
// 		console.log(name);
// 		console.log(surname);
// 		console.log(year);
// 		console.log(month);
// 		console.log(day);
// 	}
//
// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// 	function func({color,width,height}) {
// 		console.log(color);
// 		console.log(width);
// 		console.log(height);
// 	}
//
// func( {color: 'red', width: 400, height: 500} );

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// 	function func({color = 'black',width,height}) {
// 		console.log(color);
// 		console.log(width);
// 		console.log(height)
// 	}
//
// func( {width: 400, height: 500} );



























