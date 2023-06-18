'use strict'

//ПОВТОР МНОГОМЕРНОСТЬ//

// Дан следующий массив:
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

// let arr = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		sum += arr[i][j];
// 	}
// }
// console.log(sum);

// Дан следующий массив:
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
//
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		for (let k = 0; k < arr[i][j].length; k++) {
// 			sum += arr[i][j][k];
// 		}
// 	}
// }
// console.log(sum);

// Дан следующий массив:
// Вручную, без цикла, найдите сумму элементов этого массива.

// let arr = [
// 	[1, 2, 3,
// 		[4, 5,
// 			[6, 7]
// 		]
// 	],
// 	[8,
// 		[9, 10]
// 	]
// ];
// let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];
// console.log(sum);

// Дан двухмерный массив с числами:
// С помощью вложенных циклов найдите сумму элементов этого массива.

// let arr = [
// 	[1, 2, 3],
// 	[4, 5],
// 	[6],
// ];
// let sum = 0;
// for (let elArr of arr) {
// 	for (let elSubArr of elArr) {
// 		sum += elSubArr;
// 	}
// }
// console.log(sum);

// Дан трехмерный массив с числами:
// С помощью вложенных циклов найдите сумму элементов этого массива.

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	]
// ]
//
// let sum = 0
//
// for (let elArr of arr) {
// 	for (let elSubArr of elArr) {
// 		for (const elSubArrNum of elSubArr) {
// 			sum += elSubArrNum;
// 		}
// 	}
// }
// console.log(sum)

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
// 	[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }
// console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
// 	[
// 		['x', 'x', 'x', 'x'],
// 		['x', 'x', 'x', 'x'],
// 		['x', 'x', 'x', 'x']
// 	]

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push('x');
// 	}
// }
//
// console.log(arr);

// Сформируйте с помощью трех вложенных циклов следующий массив:

// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]
//
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = [];
// 		for (let k = 0; k < 5; k++) {
// 			arr[i][j].push(k + 1);
// 		}
// 	}
// }
// console.log(arr);

// Автор следующего кода хотел сделать двухмерный массив:
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// let arr = []
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }
//
// console.log(arr)

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
// 	[[1, 2], [3, 4], [5, 6], [7, 8]]

// let arr = [];
// for (let i = 0, counter = 1; i < 4; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 2; j++) {
// 		arr[i].push(counter++);
// 	}
// }
// console.log(arr);

// формируйте с помощью двух вложенных циклов следующий массив:
//
// 	[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

// let arr = [];
//
// for (let i = 0, counter = 1; i < 4; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		if ( ++counter % 2 === 0) {
// 			arr[i].push(counter++);
// 		}
// 	}
// }
// console.log(arr);

// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
//
// 	[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// let arr = [];
//
// for (let i = 0,counter = 1; i < 2; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = [];
// 		for (let k = 0; k < 2; k++) {
// 			arr[i][j].push(counter++);
// 		}
// 	}
// }
// console.log(arr);

// Дан следующий объект:
// Найдите сумму элементов приведенного объекта.

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
//
// let x = obj['key1']['key1'] + obj['key1']['key2'] + obj['key1']['key3']
// let y = obj['key2']['key1'] + obj['key2']['key2'] + obj['key2']['key3']
// let z = obj['key3']['key1'] + obj['key3']['key2'] + obj['key3']['key3']
// let res = x + y + z;
// console.log(res);

// Дан следующий объект:
// Вручную, без цикла, найдите сумму всех элементов-чисел.

// let obj = {
// 	key1: {
// 		a: 1, b: 2,
// 		c: {
// 			d: 3,
// 			e: 4,
// 		},
// 		f: 5,
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// }
// let res = obj['key1']['a'] + obj['key1']['b'] + obj['key1']['c']['d'] + obj['key1']['c']['e'] + obj['key1']['f'] + obj['key2']['g'] + obj['key2']['h']
// console.log(res);

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
//
// let sum = 0;
//
// for (let keyObj in obj) {
// 	let subKeyObj = obj[keyObj];
// 	for (let subKey in subKeyObj) {
// 		sum += subKeyObj[subKey];
// 	}
// }
// console.log(sum);

// Дан следующий объект:
// Используя циклы, найдите сумму элементов этого объекта.

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
//
// let sumObj = 0;
//
// for (let keyUpObj in obj) {
// 	let keyDownObj = obj[keyUpObj];
// 	for (let keyDownObjKey in keyDownObj) {
// 		let keyDownKeyObj = keyDownObj[keyDownObjKey];
// 		for (let keyDownKeyObjKey in keyDownKeyObj) {
// 			sumObj += keyDownKeyObj[keyDownKeyObjKey];
// 		}
// 	}
// }
// console.log(sumObj);

// Дан следующий объект со студентами:
// Выведите на экран первого студента из третьей группы.

// let students = {
// 	'group1': ['name11', 'name12', 'name13'],
// 	'group2': ['name21', 'name22', 'name23'],
// 	'group3': ['name31', 'name32', 'name33'],
// };
// console.log(students['group3'][0]);

// Дана следующая структура с данными:
// С помощью вложенных циклов выведите на
// экран все строки с данными.

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };
//
// for (let dataKey in data) {
// 	let dataObj = data[dataKey];
// 	for (let dataObjElement of dataObj) {
// 		console.log(dataObjElement);
// 	}
// }

// Дана следующая структура с данными:
// С помощью вложенных циклов выведите на экран все строки с данными.

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];
//
// for (let datum of data) {
// 	for (let datumKey in datum) {
// 		console.log(datum[datumKey]);
// 	}
// }

// Дана следующая структура с данными:
// С помощью вложенных циклов выведите на экран все строки с данными.
// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},
// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 			'data422',
// 			'data423',
// 		],
// 	},
// ];
//
// for (let datum of data) {
// 	for (let datumKey in datum) {
// 		let dataElem = datum[datumKey];
// 		for (let dataEl of dataElem) {
// 			console.log(dataEl);
// 		}
// 	}
// }

// Дан следующий массив работников:
// Выведите на экран данные каждого работника в формате имя - зарплата.
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
//
// for (const elObj of employees) {
// 	console.log(elObj['name'] + ' ' + elObj['salary'])
// }

// Дан следующий массив работников:
// Выведите на экран сумму зарплат всех работников.
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
//
// for (const elObj of employees) {
// 	console.log(elObj['salary']);
// }

// Дан следующий массив работников:
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
//
// for (let elObj of employees) {
// 	if (elObj['age'] >= 30) {
// 		console.log(elObj['salary']);
// 	}
// }

// Дан следующий объект с названиями месяцев:
// Даны также следующие переменные:
// Выведите на экран название месяца, соответствующее значениям переменных lang и month.
// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// }
// let lang = 'en' // может быть или 'ru' или 'en'
// let month = 0   // число от 0 до 11
//
// console.log(months[lang][month]);


// Дана вот такая структура для хранения списка дел за года, месяцы и дни:
// Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.

// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }
//
// let day = 29;
// let month = 12;
// let year = '2019';
//
// console.log(affairs[year][month][day])


// Добавьте в следующий массив еще одного работника:

// 	let employees = [
// 		{
// 			name: 'name1',
// 			salary: 300,
// 			age: 28,
// 		},
// 		{
// 			name: 'name2',
// 			salary: 400,
// 			age: 29,
// 		},
// 		{
// 			name: 'name3',
// 			salary: 500,
// 			age: 30,
// 		},
// 	];
//
// employees.push({
// 	name: 'name4',
// 	salary: 600,
// 	age: 32,}
// );
//
// console.log(employees);

// Скопируйте себе следующую структуру для хранения списка дел за определенные даты:

// 	let affairs = {
// 		'2019-12-28': ['data11', 'data12', 'data13'],
// 		'2019-12-29': ['data21', 'data22', 'data23'],
// 		'2019-12-30': ['data31', 'data32', 'data33'],
// 	}
// // Добавьте еще одно дело в дату '2019-12-29'.
// affairs['2019-12-29'].push('data24');
// // Добавьте еще два дела в дату '2019-12-31'.
// affairs['2019-12-31'] = [];
// affairs['2019-12-31'].push('data12','data15')
// console.log(affairs);

// Скопируйте себе следующую структуру для хранения списка студентов:

// 	let students = {
// 		'group1': {
// 			'subgroup11': ['student111', 'student112', 'student113'],
// 			'subgroup12': ['student121', 'student122', 'student123'],
// 		},
// 		'group2': {
// 			'subgroup21': ['student211', 'student212', 'student213'],
// 			'subgroup22': ['student221', 'student222', 'student223'],
// 		},
// 		'group3': {
// 			'subgroup31': ['student311', 'student312', 'student313'],
// 			'subgroup32': ['student321', 'student322', 'student323'],
// 		},
// 	};
//
// // Добавьте нового студента в подгруппу 'subgroup11'.
//
// students.group1['subgroup11'].push('student114');
// // Добавьте в первую группу еще одну подгруппу.
// students.group1['students13'] = [];
// students.group1['students13'].push('stugent145');
// // Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
// students.group4 = {};
// students.group4['subgroup14'] = [];
// students.group4['subgroup15'] = [];
// students.group4['subgroup14'].push('student226', 'student778');
// students.group4['subgroup15'].push('student206', 'student978');
// console.log(students);































