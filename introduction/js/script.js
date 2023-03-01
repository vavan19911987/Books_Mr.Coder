"use strict";

//"МНОГОМЕРНОСТЬ"

// Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.

// let arr = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
//     ['j', 'k', 'l'],
// ];
// let arr2 = [];
//
// arr2.push(arr[3][2]);
// arr2.push(arr[1][1]);
// arr2.push(arr[2][0]);
// arr2.push(arr[0][0]);
// console.log(arr2);


// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// let arr1 = [];
// let sum = 0;
// arr1.push(arr[0][0] + arr[0][1]);
// arr1.push(arr[1][0] + arr[1][1]);
// arr1.push(arr[2][0] + arr[2][1]);
// for (let i = 0; i <= arr1.length -1; i++) {
//     sum += arr1[i];
// }
// console.log(arr1);
// console.log(sum);

// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

// let arr = [
//     [
//         [1, 2],
//         [3, 4],
//     ],
//     [
//         [5, 6],
//         [7, 8],
//     ],
// ];
//
// let arr2 = [];
// let sum = 0;
// arr2.push(arr[0][0][0] + arr[0][0][1]);
// arr2.push(arr[0][1][0] + arr[0][1][1]);
// arr2.push(arr[1][1][0] + arr[0][1][1]);
// arr2.push(arr[1][1][0] + arr[1][1][1]);
// for (let i = 0; i <= arr2.length - 1; i++) {
//     sum += arr2[i];
// }
// console.log(arr2);
// console.log(sum);

// Вручную, без цикла, найдите сумму элементов этого массива.
// let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
// console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1]);

// первый цикл считает массивы а второй элементы этих массивов
// let arr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8],
//     [9, 10]
// ];
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         console.log(elem);
//     }
// }

// С помощью вложенных циклов найдите сумму элементов этого массива.
//
// let arr = [
//     [1, 2, 3],
//     [4, 5],
//     [6]
// ];
// let sumArr = 0;
// for (let subSrr of arr) {
//     for (let elem of subSrr) {
//         sumArr += elem;
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sumArr += arr[i][j];
//     }
// }
// console.log(sumArr);

// Дан трехмерный массив с числами:
// С помощью вложенных циклов найдите сумму элементов этого массива.
//
// let arr = [
//     [
//         [1, 2],
//         [3, 4]
//     ],
//     [
//         [5, 6],
//         [7, 8]
//     ]
// ];
// let sumArr = 0;
// for (let subArr of arr) {
//     for (let subArrElement of subArr) {
//         for (let number of subArrElement) {
//             sumArr += number;
//         }
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//             sumArr += arr[i][j][k];
//
//         }
//     }
// }
// console.log(sumArr);


// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 5; j++) {
//         arr[i].push(j + 1);
//     }
// }
// console.log(arr);


// Сформируйте с помощью двух вложенных циклов следующий массив:
//
//     [
//         ['x', 'x', 'x', 'x'],
//         ['x', 'x', 'x', 'x'],
//         ['x', 'x', 'x', 'x']
//     ]

// let arr = [];
// let x = 'Ok';
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 4; j++) {
//         arr[i].push(x);
//     }
// }
// console.log(arr);


// Сформируйте с помощью трех вложенных циклов следующий массив:
//
//     [
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//     ]

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for (let k = 0; k < 5; k++) {
//             arr[i][j].push(k + 1);
//         }
//     }
// }
// console.log(arr);

// Автор следующего кода хотел сделать двухмерный массив:
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
// console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
//     [[1, 2], [3, 4], [5, 6], [7, 8]]
// let arr = [];
// let k = 1;
// for (let i = 0; i < 4; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i].push(k++);
//     }
// }
// console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
//     [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
// let arr = [];
// let k = 1;
// for (let i = 0; i < 4; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++) {
//         if (++k % 2 === 0) {
//             arr[i].push(k++);
//         }
//     }
// }
// console.log(arr);

// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
//     [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// let arr = [];
// let k = 1;
// for (let i = 0; i < 2; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for (let l = 0; l < 2; l++) {
//             arr[i][j].push(k++);
//         }
//     }
// }
// console.log(arr);

// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
// console.log(arr);

// Дан следующий объект:
//     Найдите сумму элементов приведенного объекта.


//     let obj = {
//         key1: {
//             key1: 1,
//             key2: 2,
//             key3: 3,
//         },
//         key2: {
//             key1: 4,
//             key2: 5,
//             key3: 6,
//         },
//         key3: {
//             key1: 7,
//             key2: 8,
//             key3: 9,
//         },
//     }
//     let key1 = obj["key1"]["key1"] + obj["key1"]["key2"] + obj["key1"]["key3"];
//     let key2 = obj["key2"]["key1"] + obj["key2"]["key2"] + obj["key2"]["key3"];
//     let key3 = obj["key3"]["key1"] + obj["key3"]["key2"] + obj["key3"]["key3"]
//     let sumObj = 0;
//     sumObj = key1 + key2 + key3;
// console.log(sumObj)

// Дан следующий объект:
//     Выведите на экран элемент 'b2' и элемент 'c1'.


//     let obj = {
//         1: {
//             1: 'a1',
//             2: 'a2',
//             3: 'a3',
//         },
//         2: {
//             1: 'b1',
//             2: 'b2',
//             3: 'b3',
//         },
//         3: {
//             1: 'c1',
//             2: 'c2',
//             3: 'c3',
//         },
//     }
// console.log(obj['2']['2'], obj['3']['1']);

// Вручную, без цикла, найдите сумму всех элементов-чисел.

//
// let obj = {
//     key1: {
//         a: 1,
//         b: 2,
//         c: {
//             d: 3,
//             e: 4,
//         },
//         f: 5,
//     },
//     key2: {
//         g: 6,
//         h: 7,
//     },
// }
//
// let sumKey = obj["key1"]["a"] + obj["key1"]["b"] + obj["key1"]["c"]["d"] + obj["key1"]["c"]["e"] + obj["key1"]["f"] + obj["key2"]["g"] + obj["key2"]["h"]
// console.log(sumKey);


// Дан следующий объект:Используя циклы, найдите сумму элементов этого объекта.

//
//     let obj = {
//         1: {
//             1: 11,
//             2: 12,
//             3: 13,
//         },
//         2: {
//             1: 21,
//             2: 22,
//             3: 23,
//         },
//         3: {
//             1: 24,
//             2: 25,
//             3: 26,
//         },
//     }
// let sumObj = 0;
// for (let key in obj) {
//     let subObj = obj[key];
//     for (let subKey in subObj) {
//         sumObj += subObj[subKey];
//     }
// }
// console.log(sumObj);

// Дан следующий объект: найти сумму
//
//     let obj = {
//         1: {
//             1: {
//                 1: 111,
//                 2: 112,
//                 3: 113,
//             },
//             2: {
//                 1: 121,
//                 2: 122,
//                 3: 123,
//             },
//         },
//         2: {
//             1: {
//                 1: 211,
//                 2: 212,
//                 3: 213,
//             },
//             2: {
//                 1: 221,
//                 2: 222,
//                 3: 223,
//             },
//         },
//         3: {
//             1: {
//                 1: 311,
//                 2: 312,
//                 3: 313,
//             },
//             2: {
//                 1: 321,
//                 2: 322,
//                 3: 323,
//             },
//         },
//     }
//
// let sumObj = 0;
// for (let key in obj) {
//     let subObj = obj[key];
//     for (let subKey in subObj) {
//         let subObjKey = subObj[subKey];
//         for (let numKey in subObjKey) {
//             sumObj += subObjKey[numKey];
//         }
//     }
// }
// console.log(sumObj);

// Дан следующий объект со студентами:
//     Выведите на экран первого студента из третьей группы.


//     let students = {
//         'group1': ['name11', 'name12', 'name13'],
//         'group2': ['name21', 'name22', 'name23'],
//         'group3': ['name31', 'name32', 'name33'],
//     };
// console.log(students['group3'][0]);

// Дана следующая структура с данными:
// //     С помощью вложенных циклов выведите на экран все строки с данными.
//
//     let data = {
//         1: ['data11', 'data12', 'data13',],
//         2: ['data21', 'data22', 'data23',],
//         3: ['data31', 'data32', 'data33',],
//         4: ['data41', 'data42', 'data43',],
//     };
//
// for (let key in data) {
//     let sunData = data[key]
//     for (let elem of sunData) {
//         console.log(elem);
//     }
// }

// Дана следующая структура с данными:
//     С помощью вложенных циклов выведите на экран все строки с данными.


//     let data = [
//         {
//             1: 'data11',
//             2: 'data12',
//             3: 'data13',
//         },
//         {
//             1: 'data21',
//             2: 'data22',
//             3: 'data33',
//         },
//         {
//             1: 'data31',
//             2: 'data32',
//             3: 'data33',
//         },
//     ];
//
// for (let elem of data) {
//     for (let key in elem) {
//         console.log(elem[key]);
//     }
// }
// Дана следующая структура с данными:
//     С помощью вложенных циклов выведите на экран все строки с данными.


//     let data = [
//         {
//             1: ['data111', 'data112', 'data113',],
//             2: ['data121', 'data122', 'data123',],
//         },
//         {
//             1: ['data211', 'data212', 'data213',],
//             2: ['data221', 'data222', 'data223',],
//         },
//         {
//             1: ['data411', 'data412', 'data413',],
//             2: ['data421', 'data422', 'data423',],
//         },
//     ];
// for (let key in data) {
//     let dataKey = data[key];
//     for (let elem in dataKey) {
//         let dataKeyElem = dataKey[elem];
//         for (let elemArr of dataKeyElem) {
//             console.log(elemArr);
//
//         }
//
//     }
// }
// Дан следующий массив работников:
//     Выведите на экран данные каждого работника в формате имя - зарплата.

//
//     let employees = [
//         {
//             name: 'name1',
//             salary: 300,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//         },
//     ];
//
// for (let user of employees) {
//     console.log(user.name + ' ' + user.salary);
// }

// Дан следующий массив работников:
    // Выведите на экран сумму зарплат всех работников.

//     let employees = [
//         {
//             name: 'name1',
//             salary: 300,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//         },
//     ];
// let sum = 0;
// for (let elem of employees) {
//     sum += elem.salary;
// }
// console.log(sum);

// Дан следующий массив работников:
//     Выведите на экран сумму зарплат тех работников, возраст
//     которых равен или более 30 лет.


//     let employees = [
//         {
//             name: 'name1',
//             salary: 300,
//             age: 28,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//             age: 29,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//             age: 30,
//         },
//         {
//             name: 'name4',
//             salary: 600,
//             age: 31,
//         },
//         {
//             name: 'name5',
//             salary: 700,
//             age: 32,
//         },
//     ];
//
// for (let elem of employees) {
//     if (elem.age >= 30) {
//         console.log(elem.salary);
//     }
// }

// Дан следующий объект с названиями месяцев:
//     Даны также следующие переменные:Выведите на экран название месяца,
//     соответствующее значениям переменных lang и month.


//     let months = {
//         'ru': ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',],
//         'en': ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',],
//     };
//
//
//     let lang = 'ru'; // может быть или 'ru' или 'en'
//     let month = 2;   // число от 0 до 11
// console.log(months[lang][month -1]);

// Дана вот такая структура для хранения списка дел за года, месяцы и дни:
//     Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
//
// let yar = '2019',
//     month = '12',
//     day = '30',
//     del = 1;
//
//     let affairs = {
//         '2018': {
//             11: {
//                 29: ['дело111', 'дело112', 'дело113'],
//                 30: ['дело121', 'дело122', 'дело123'],
//             },
//             12: {
//                 30: ['дело211', 'дело212', 'дело213'],
//                 31: ['дело221', 'дело222', 'дело223'],
//             },
//         },
//         '2019': {
//             12: {
//                 29: ['дело311', 'дело312', 'дело313'],
//                 30: ['дело321', 'дело322', 'дело323'],
//                 31: ['дело331', 'дело332', 'дело333'],
//             }
//         },
//     }
// // console.log(affairs[yar][month][day]);
// for (let key in affairs) {
//     let affterKey = affairs[key];
//     if (key === yar){
//         for (let keyAff in affterKey) {
//             let affKeyDay = affterKey[keyAff];
//             if (keyAff === month) {
//                 for (let keyDay in affKeyDay) {
//                     if (keyDay === day) {
//                         // console.log(affKeyDay[keyDay])
//                         for (let i = 0; i < affKeyDay[keyDay].length; i++) {
//                             if (i === del) {
//                                 console.log(affKeyDay[keyDay][i]);
//                             }
//                         }
//                     }
//
//                 }
//             }
//
//
//         }
//     }
//
// }

// Автор следующего кода хотел вывести элемент со значением '24':
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

// let key1 = 'key2';
// let key2 = 'key4';
// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
// console.log(obj[key1][key2]);
// Добавьте в следующий массив еще одного работника:

//     let employees = [
//         {
//             name: 'name1',
//             salary: 300,
//             age: 28,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//             age: 29,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//             age: 30,
//         },
//     ];
//
//     employees.push({
//         name: 'name4',
//         salary: 600,
//         age: 40,
//     })
//
// console.log(employees);

// Скопируйте себе следующую структуру для хранения списка дел за определенные даты:

//     let affairs = {
//         '2019-12-28': ['data11', 'data12', 'data13'],
//         '2019-12-29': ['data21', 'data22', 'data23'],
//         '2019-12-30': ['data31', 'data32', 'data33'],
//     }
// // Добавьте еще одно дело в дату '2019-12-29'.
//
// affairs["2019-12-28"].push('data14');
//
// // Добавьте еще два дела в дату '2019-12-31'.
// affairs["2019-12-31"] = [];
// affairs["2019-12-31"].push('data15');
// console.log(affairs)

// Скопируйте себе следующую структуру для хранения списка студентов:

//     let students = {
//         'group1': {
//             'subgroup11': ['student111', 'student112', 'student113'],
//             'subgroup12': ['student121', 'student122', 'student123'],
//         },
//         'group2': {
//             'subgroup21': ['student211', 'student212', 'student213'],
//             'subgroup22': ['student221', 'student222', 'student223'],
//         },
//         'group3': {
//             'subgroup31': ['student311', 'student312', 'student313'],
//             'subgroup32': ['student321', 'student322', 'student323'],
//         },
//     };
//
// // Добавьте нового студента в подгруппу 'subgroup11'.
//
// students.group1.subgroup11.push('subgroup11');
//
// // Добавьте в первую группу еще одну подгруппу.
// students.group1['subgroup13'] = [];
// students.group1.subgroup13.push('student321', 'student322');
//
// // Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
//
// students['group4'] = {}
// students.group4['subgroup40'] = [];
// students.group4['subgroup41'] = [];
// students.group4.subgroup40.push('student321', 'student322');
// students.group4.subgroup41.push('student001', 'student000');
// console.log(students);
