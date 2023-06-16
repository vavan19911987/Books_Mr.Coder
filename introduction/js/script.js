"use strict";

//ПРАКТИКА//

// let arr = [1, 2, 3, 4, 5];
// let parent = document.querySelector('#parent');
// for (let elem of arr) {
//     let p = document.createElement('p');
//     p.innerHTML += elem;
//     p.addEventListener('click', () => {
//        p.innerHTML = +p.innerHTML + 1;
//     })
//     parent.appendChild(p);
// }

// Дан ul:
//     <ul id="elem"></ul>
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let arr = [1, 2, 3, 4, 5, 6];
// let listUl = document.querySelector('#elem');
// for (let i = 0; i < arr.length ; i++) {
//     let elemLi = document.createElement('li');
//     elemLi.textContent += arr[i];
//     listUl.appendChild(elemLi);
// }

// Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
// let arr = [1, 2, 3, 4, 5, 6];
// let listUl = document.querySelector('#elem');
// for (let i = 0; i < arr.length ; i++) {
//     let elemLi = document.createElement('li');
//     elemLi.innerHTML += arr[i];
//     listUl.appendChild(elemLi);
// }
// listUl.addEventListener('click', (e) => {
//    alert(e.target.innerHTML);
// })

// Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
// let arr = [1, 2, 3, 4, 5, 6];
// let listUl = document.querySelector('#elem');
// for (let i = 0; i < arr.length ; i++) {
//     let elemLi = document.createElement('li');
//     elemLi.innerHTML += arr[i];
//     listUl.appendChild(elemLi);
// }
// listUl.addEventListener('click', (e) => {
//     e.target.innerHTML += '!';
// })

// Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
// let arr = [1, 2, 3, 4, 5, 6];
// let listUl = document.querySelector('#elem');
// for (let i = 0; i < arr.length; i++) {
//     let elemLi = document.createElement('li');
//     elemLi.innerHTML += arr[i];
//     listUl.appendChild(elemLi);
//
// }
// listUl.addEventListener('click', func);
// function func(e) {
//     e.stopPropagation();
//     e.target.innerHTML += "!"
// }

// Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
// <table id="table"></table>
// let tb = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//     tr.innerHTML = 'no';
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         td.innerHTML = 'Yes';
//         td.style.padding = '15px'
//         td.style.border = '1px solid red'
//         tr.appendChild(td);
//     }
//     tb.appendChild(tr);
// }

// Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
// let tb = document.querySelector('#table');
//
// function creatTabels(e) {
//     for (let i = 0; i < 5; i++) {
//         let tr = document.createElement('tr');
//         tr.innerHTML = 'no';
//         for (let j = 0; j < 10; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = 'X';
//             td.style.padding = '15px'
//             td.style.border = '1px solid red'
//             tr.appendChild(td);
//         }
//         tb.appendChild(tr);
//     }
//     tb.addEventListener('click', function cl(e) {
//             e.target.style.background = 'green';
//     })
// }
// creatTabels();

// Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
// <input type="text" name="#" id="elem1">
// <input type="text" name="#" id="elem2">
// <input type="submit" value="Generator" id="btn">
// <table id="table"></table>


// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let btn = document.querySelector('#btn')
// let tab = document.querySelector('#table')
// function generatorTabls() {
//     btn.addEventListener('click', () => {
//         for (let i = 0; i < 5; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 0; j < 10; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green'
//                 td.style.width = elem1.value
//                 td.style.height = elem2.value
//                 tr.appendChild(td);
//             }
//             tab.appendChild(tr);
//         }
//     })
// }
// generatorTabls();

// Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
// <input type="text" name="#" id="inpCell" value="Кол-во ячеек">
// <input type="text" name="#" id="inpColumn" value="Кол-во столбцов">
// <input type="text" name="#" id="inpWidth" value="10px">
// <input type="text" name="#" id="inpHeight" value="10px">
// <input type="submit" value="Generator" id="btn">
// <table id="table"></table>
// let inpCell = document.querySelector('#inpCell')
// let inpColumn = document.querySelector('#inpColumn')
// let inpWidth = document.querySelector('#inpWidth')
// let inpHeight = document.querySelector('#inpHeight')
// let btn = document.querySelector('#btn')
// let tab = document.querySelector('#table')
//
// function generatorTabls() {
//     btn.addEventListener('click', () => {
//         for (let i = 0; i < inpCell.value; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 0; j < inpColumn.value; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green'
//                 td.style.width = inpWidth.value
//                 td.style.height = inpHeight.value
//                 tr.appendChild(td);
//             }
//             tab.appendChild(tr);
//         }
//     })
// }
// generatorTabls();


// Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.

// let table = document.querySelector('#table');
// let k = 1; // начальное значение счетчика
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement('td');
//         td.textContent = k; // записываем счетчик в ячейку
//         k++; // увеличиваем счетчик
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
// let table = document.querySelector('#table');
// let k = 1;
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement('td');
//         if (k % 2 === 1) {
//             td.textContent = ++k;
//         }
//         ++k;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],[13, 14, 15, 16]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
//     let tr = document.createElement('tr');
//     for (let elem of subArr) {
//         let td = document.createElement('td');
//         td.textContent = elem;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let elArr of arr) {
//     let tr = document.createElement('tr');
//     for (let elNum of elArr) {
//         let td = document.createElement('td');
//         td.textContent = elNum;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// Модифицируйте предыдущую задачу так,
// чтобы в таблицу записывались не элементы, а квадраты этих элементов.

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let elArr of arr) {
//     let tr = document.createElement('tr');
//     for (let elNum of elArr) {
//         let td = document.createElement('td');
//         td.textContent += elNum ** 2;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }


// let users = [
//     {
//         name: 'Vladimir',
//         surname: 'Pulin',
//         patronymic: 'Mishailovich'
//     },
//     {
//         name: 'Kristina',
//         surname: 'Pilina',
//         patronymic: 'Ivanovna'
//     },
//     {
//         name: 'Ivan',
//         surname: 'Russu',
//         patronymic: 'Ivanovich'
//     },
// ];
//
// let table = document.getElementById('table');
// table.style.display = 'block'
//
// for (let user of users) {
//     let tr = document.createElement('tr');
//
//     let td1 = document.createElement('td');
//     td1.textContent = user.name;
//     td1.style.border = '1px solid green'
//     td1.style.marginRight = '5px'
//     td1.style.padding = '5px'
//     tr.appendChild(td1);
//
//     let td2 = document.createElement('td');
//     td2.textContent = user.surname;
//     td2.style.border = '1px solid green';
//     td2.style.marginRight = '5px';
//     td2.style.padding = '5px';
//     tr.appendChild(td2);
//
//     let td3 = document.createElement('td');
//     td3.textContent = user.patronymic;
//     td3.style.border = '1px solid green';
//     td3.style.marginRight = '5px';
//     td3.style.padding = '5px';
//     tr.appendChild(td3);
//
//     table.appendChild(tr);
// }
// Дан следующий массив с работниками:
//     Выведите элементы этого массива в виде HTML таблицы.

// let table = document.getElementById('table');
// let employees = [
//     {
//         name: 'Vladimir',
//         age: 30,
//         salary: 400
//     },
//     {
//         name: 'Ivan',
//         age: 31,
//         salary: 500
//     },
//     {
//         name: 'Kristina',
//         age: 32,
//         salary: 600
//     },
// ];
//
// for (let user of employees) {
//     let tr = document.createElement('tr');
//
//     let td1 = document.createElement('td');
//     td1.innerHTML = user.name;
//     td1.style.border = '1px solid green'
//     td1.style.marginRight = '5px'
//     td1.style.padding = '5px'
//     tr.appendChild(td1);
//
//     let td2 = document.createElement('td');
//     td2.innerHTML = user.age;
//     td2.style.border = '1px solid green'
//     td2.style.marginRight = '5px'
//     td2.style.padding = '5px'
//     tr.appendChild(td2);
//
//     let td3 = document.createElement('td');
//     td3.innerHTML = user.salary;
//     td3.style.border = '1px solid green'
//     td3.style.marginRight = '5px'
//     td3.style.padding = '5px'
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }

// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку
// с возрастом ее содержимое увеличивалось на 1.
// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку
// с зарплатой ее содержимое увеличивалось на 10%.
// let table = document.getElementById('table');
// let employees = [
//     {
//         name: 'Vladimir',
//         age: 30,
//         salary: 400
//     },
//     {
//         name: 'Ivan',
//         age: 31,
//         salary: 500
//     },
//     {
//         name: 'Kristina',
//         age: 32,
//         salary: 600
//     },
// ];
//
// for (let user of employees) {
//     let tr = document.createElement('tr');
//
//     let td1 = document.createElement('td');
//     td1.innerHTML = user.name;
//     td1.style.border = '1px solid green'
//     td1.style.marginRight = '5px'
//     td1.style.padding = '5px'
//     tr.appendChild(td1);
//
//     let td2 = document.createElement('td');
//     td2.innerHTML = user.age;
//     td2.style.border = '1px solid green'
//     td2.style.marginRight = '5px'
//     td2.style.padding = '5px'
//     td2.addEventListener('click', (e) => {
//         e.target.innerHTML = +td2.innerHTML + 1;
//     })
//     tr.appendChild(td2);
//
//     let td3 = document.createElement('td');
//     td3.innerHTML = user.salary;
//     td3.style.border = '1px solid green'
//     td3.style.marginRight = '5px'
//     td3.style.padding = '5px'
//     td3.addEventListener('click', (e) => {
//         e.target.innerHTML = Math.floor(+td3.innerHTML + (+td3.innerHTML * 10 / 100));
//     })
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }
// Сделайте кнопку, по нажатию на которую в таблицу
// будет добавляться новый ряд.
// <table id="table"></table>
// <input type="submit" value="Generat row" id="btn">

// let tab = document.querySelector('#table');
// let btn = document.querySelector('#btn');
//
// btn.addEventListener('click', () => {
//     let tr = document.createElement('tr');
//
//     tab.appendChild(tr)
// })

// Дана таблица размером 2 на 2:
// <table id="table">
//     <tr>
//         <td></td>
//         <td></td>
//     </tr>
//     <tr>
//         <td></td>
//         <td></td>
//     </tr>
// </table>
// td {
//     width: 50px;
//     height: 50px;
//     border: 1px solid black;
// }
// Дана также кнопка. Сделайте так,
//     чтобы по нажатию на кнопку таблица увеличивалась
// на один ряд и на одну колонку.

// let btn = document.querySelector('#btn');
// let tab2 = document.querySelector('#table');
// let tab = document.querySelectorAll('tbody tr');
// let elem = document.querySelector('tr');
//
// btn.addEventListener('click', () => {
//     // for (let el of tab) {
//     //     let td = document.createElement('td');
//     //     el.appendChild(td);
//     // }
//     let clone = elem.cloneNode(true);
//     tab2.appendChild(clone);
//     for (let el of tab) {
//         let td = document.createElement('td');
//         el.appendChild(td);
//     }
// })

// Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
// let tab = document.querySelectorAll('#table td');
// let btn = document.querySelector('#btn');
//
// btn.addEventListener('click', () => {
//     for (let el of tab) {
//         el.textContent *= '2';
//     }
// })

// Дан следующий код:
//
//     <ul id="parent">
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
//
// <input type="submit" id="button">
//     Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент.
//     Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li,
//     которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

// let parent = document.querySelector('#parent');
// let btn = document.querySelector('#button');
// function addRem() {
//     btn.addEventListener('click', (e) => {
//         let li = document.createElement('li');
//         li.textContent = 'new li';
//         parent.appendChild(li);
//     })
//     parent.addEventListener('click', (e) => {
//         e.target.remove()
//     })
// }
// addRem();

// Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// <p id="elem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, neque!</p>
// <a href="#" id="linkRemove">Remove</a>

// let elem = document.querySelector('#elem');
// let linkRemove = document.querySelector('#linkRemove');
// function remove() {
//     linkRemove.addEventListener('click', (e) => {
//         elem.remove();
//         e.preventDefault();
//     })
// }
// remove();


// <div id="parent">
//     <p>text1</p>
//     <p>text2</p>
//     <p>text3</p>
// </div>
// let elems = document.querySelectorAll('#parent p');
//
// for (let elem of elems) {
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     elem.appendChild(remove);
//
//     remove.addEventListener('click', function(event) {
//         elem.remove();
//         event.preventDefault();
//     });
// }


// Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
// <ul id="elem"></ul>
// <button id="btnLi" type="submit">add li</button>


// let list = document.querySelector('#elem');
// let buttonList = document.querySelector('#btnLi');
// function addRem() {
//     buttonList.addEventListener('click', (e) => {
//         let li = document.createElement('li');
//         li.textContent = 'new';
//         let remove = document.createElement('a');
//         remove.href = ' ';
//         remove.textContent = ' removeLi';
//         li.appendChild(remove);
//         remove.addEventListener('click', (e) => {
//             li.remove();
//             e.preventDefault();
//         })
//         list.appendChild(li);
//     })
// }
// addRem();

// Дана HTML таблица. Добавьте в нее еще одну колонку,
//     в которой для каждого ряда таблицы будет стоять ссылка на
//     удаление этого ряда.
// <table id="table">
//     <tr>
//         <td>1</td>
//         <td>2</td>
//     </tr>
//     <tr>
//         <td>3</td>
//         <td>4</td>
//     </tr>
// </table>

// let elemTabs = document.querySelectorAll('#table tr');
// elemTabs.forEach((el) => {
//     let delRow = document.createElement('td');
//     let linkDel = document.createElement('a');
//     linkDel.href = ' ';
//     linkDel.innerHTML = 'delRow';
//     delRow.appendChild(linkDel);
//     linkDel.addEventListener('click', (e) => {
//         el.remove();
//         e.preventDefault();
//     })
//     el.appendChild(delRow);
// })


// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
//
// input.value = elem.textContent;
//
// input.addEventListener('input', function() {
//     elem.textContent = this.value;
// });

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(e) {
//     let input = document.createElement('input');
//     input.value = elem.textContent;
//     input.addEventListener('input', function() {
//         elem.textContent = this.value;
//     });
//
//     input.addEventListener('blur', (e) => {
//         input.remove()
//     });
//     elem.parentElement.appendChild(input);
// });
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function func() {
//     let input = document.createElement('input');
//
//     input.value = elem.textContent;
//     elem.textContent = ' ';
//     elem.appendChild(input);
//
//     input.addEventListener('blur', function(e) {
//         elem.textContent = this.value;
//         elem.addEventListener('click', func)
//     });
//     elem.removeEventListener('click', func);
// });

// Дан тег ul. Сделайте так, чтобы по клику на любую li в ней
// появлялся инпут, с помощью
// которого можно будет поредатировать текст этой li.
// <ul id="list">
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
// </ul>
// <button type="submit"  id="btn">ADD LIST</button>


// let list = document.querySelector('#list');
// let button = document.querySelector('#btn');
// function addLi() {
//     button.addEventListener('click', () => {
//         let li = document.createElement('li');
//         li.textContent = 'newLi';
//         list.appendChild(li);
//     })
// }
// addLi();
// list.addEventListener('click', (e) => {
//     let input = document.createElement('input');
//     input.value = e.target.textContent;
//     e.target.textContent = ' ';
//     e.target.appendChild(input);
//     input.addEventListener('blur', () => {
//         e.target.textContent = input.value;
//     });
// })
// Дана HTML таблица. Сделайте так,
// чтобы по клику на любую ячейку в ней
// появлялся инпут для редактирования текста этой ячейки.
// <table id="table">
//     <tr>
//         <td>1</td>
//         <td>2</td>
//     </tr>
//     <tr>
//         <td>3</td>
//         <td>4</td>
//     </tr>
// </table>
//
// let tabs = document.querySelector('#table');
// tabs.addEventListener('click', (e) => {
//     let input = document.createElement('input');
//     input.value = e.target.textContent;
//     input.style.width = '40px'
//     e.target.textContent = ' ';
//     e.target.appendChild(input);
//
//     input.addEventListener('blur', () => {
//         e.target.textContent = input.value;
//     });
// })


// Дан следующий HTML код:
// Добавьте ссылку на удаление в конец каждого абзаца.
// Сделайте так, чтобы по клику на span (добавьте span) в
// нем появлялся инпут для редактирования.
//     <div id="parent">
//         <p>text1</p>
//         <p>text2</p>
//         <p>text3</p>
//     </div>
// Оберните сначала текст абзаца
// в теги span, добавьте к этим тегам
// возможность редактирования, а затем добавьте
// в конец каждого абзаца ссылку на удаление.
// let parent = document.querySelector('#parent');
// let parent2 = document.querySelectorAll('p');
// let span = document.querySelector('span');
// parent.addEventListener('click', (e) => {
//     let inp = document.createElement('input');
//     let link = document.createElement('a');
//     link.href = ' ';
//     link.innerHTML = ' DEL'
//     inp.value = e.target.textContent;
//     e.target.textContent = ' ';
//     e.target.appendChild(inp);
//     inp.addEventListener('blur', () => {
//         e.target.textContent = inp.value;
//         e.target.innerHTML = `<span>${e.target.innerHTML}</span>`;
//         e.target.appendChild(link)
//     })
//     link.addEventListener('click', function (e) {
//         span.remove();
//         e.preventDefault()
//
//     })
// })

// Дан следующий HTML код:
//
//     <div id="parent">
//         <p><span>text1</span></p>
//         <p><span>text2</span></p>
//         <p><span>text3</span></p>
//     </div>


// Добавьте ссылку на удаление в конец каждого абзаца.
//     Сделайте так, чтобы по клику на span в
// нем появлялся инпут для редактирования.
// <div id="parent">
//     <p><span>text1</span></p>
//     <p><span>text2</span></p>
//     <p><span>text3</span></p>
// </div>
// let parent = document.querySelector('#parent');
// let span = document.querySelectorAll('#parent span')
// parent.addEventListener('click', function func(e) {
//     let inp = document.createElement('input');
//     inp.value = e.target.textContent;
//     e.target.textContent = ' ';
//     for (let el of span) {
//         e.stopPropagation();
//         e.target.appendChild(inp);
//         el.dataset.link = 'link';
//         inp.addEventListener('blur', (event) => {
//             e.target.textContent = inp.value;
//             parent.addEventListener('click', func);
//         })
//     }
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = ' remove';
//     remove.style.textDecoration = 'none'
//     remove.style.color = 'red'
//     e.target.insertAdjacentElement('afterend', remove);
//     remove.addEventListener('click', function (event) {
//         e.target.remove();
//         this.remove()
//         parent.addEventListener('click', func);
//         event.preventDefault();
//     });
//     parent.removeEventListener('click', func);
// })

// Дан следующий HTML код:
//     <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// Добавьте в конец каждого абзаца ссылку,
//     по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).

// let parElem = document.querySelectorAll('p');
// let  divs = document.createElement('div');
// for (let i = 0; i < parElem.length; i++) {
//     parElem[i].parentNode.insertBefore(divs, parElem[i]);
//     divs.appendChild(parElem[i]);
// }
// let div = document.querySelectorAll('div p');
// for (let el of div) {
//     let link = document.createElement('a');
//     link.textContent = ' remove'
//     link.href = '';
//     el.appendChild(link)
//     link.addEventListener('click', (e) => {
//         el.style.color = 'red'
//         link.remove();
//         e.preventDefault();
//     })
// }

// Дана некоторая HTML таблица. Добавьте в эту таблицу еще
// одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.
// <table id="table">
//     <tr>
//         <td>1</td>
//     </tr>
//     <tr>
//         <td>3</td>
//     </tr>
// </table>
// let table = document.querySelectorAll('#table tr')
// function addTD() {
//     for (let el of table) {
//         let td = document.createElement('td');
//         let link = document.createElement('a');
//         link.innerHTML = ' clickMy';
//         link.href = ' ';
//         link.style.textDecoration = 'none';
//         link.style.padding = '5px';
//         link.addEventListener('click', (e) => {
//             el.style.background = 'green';
//             e.preventDefault();
//         })
//         td.appendChild(link);
//         el.appendChild(td);
//     }
// }
// addTD();

// Модифицируйте предыдущую задачу так, чтобы первое нажатие
// по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.

// let table = document.querySelectorAll('#table tr')
// function addTD() {
//     for (let el of table) {
//         let td = document.createElement('td');
//         let link = document.createElement('a');
//         link.innerHTML = ' clickMy';
//         link.href = ' ';
//         link.style.textDecoration = 'none';
//         link.style.padding = '5px';
//         link.addEventListener('click', (e) => {
//             if (el.style.background === 'green') {
//                 el.style.background = 'none';
//             } else {
//                 el.style.background = 'green';
//             }
//             e.preventDefault();
//         })
//         td.appendChild(link);
//         el.appendChild(td);
//     }
// }
// addTD();

// <p id="elem1">1</p><button data-elem="elem1">toggle</button>
// <p id="elem2">2</p><button data-elem="elem2">toggle</button>
// <p id="elem3">3</p><button data-elem="elem3">toggle</button>

// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         let elem = document.querySelector('#' + this.dataset.elem);
//         elem.classList.toggle('hidden');
//     });
// } // первое решение

// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
//
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         elems[i].classList.toggle('hidden');
//     });
// } // второе решение

// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         this.previousElementSibling.classList.toggle('hidden');
//     });
// } // третье решение


// Дана HTML список ul. Сделайте так, чтобы по
// нажатию на любой пункт списка он активировался красным фоном.
// <ul id="list">
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
// </ul>

// let list = document.querySelectorAll('#list li');
// for (let elList of list) {
//     elList.addEventListener('click', function (e) {
//         if (elList.className === 'active') {
//             this.classList.remove('active');
//         } else {
//             this.classList.add('active');
//         }
//
//     })
// }

// let tds = document.querySelectorAll('#table td');
// let color = 'color1';
// for (let td of tds) {
//     td.addEventListener('click', function() {
//         if (color === 'color1') {
//             color = 'color2'
//         } else {
//             color = 'color1'
//         }
//         this.classList.add(color);
//     });
// }

// let tds = document.querySelectorAll('#table td');
//
// let i = 0;
// let colors = ['color1', 'color2', 'color3'];
//
// for (let td of tds) {
//     td.addEventListener('click', function() {
//         this.classList.add(colors[i]);
//         i++;
//         if (i === colors.length) {
//             i = 0;
//         }
//     });
// }

// Дан массив. Выведите его элементы в виде списка ul.
// let body = document.querySelector('body');
// let arrInfo = ['Моё имя Владимир', 'Моя фамилия Пулин', 'Моё отчество Михайлович'];
// function creatUlList() {
//     let list = document.createElement('ul');
//     for (let el of arrInfo) {
//         let li = document.createElement('li');
//         li.textContent = el;
//         list.appendChild(li);
//     }
//     list.style.listStyleType = 'none';
//     body.appendChild(list);
// }
// creatUlList();


// Модифицируйте предыдущую задачу так
// , чтобы по клику на любую li в ней появлялся инпут,
// с помощью которого ее можно будет поредактировать.

// let body = document.querySelector('body');
// let arrInfo = ['Моё имя Владимир', 'Моя фамилия Пулин', 'Моё отчество Михайлович', 'Я работаю на севере'];
// function creatUlList() {
//     let list = document.createElement('ul');
//     let li;
//     for (let el of arrInfo) {
//         li = document.createElement('li');
//         li.textContent = el;
//         list.appendChild(li);
//     }
//     list.addEventListener('click', (e) => {
//         let input = document.createElement('input');
//         input.value = e.target.textContent;
//         e.target.textContent = '';
//         input.addEventListener('blur', () => {
//             e.target.textContent = input.value;
//             if (input.value === '') {
//                 e.target.textContent = 'Данные отсутствуют';
//             }
//         })
//         e.target.appendChild(input);
//     })
//     list.style.listStyleType = 'none';
//     body.appendChild(list);
// }
// creatUlList();

// Модифицируйте предыдущую задачу так, чтобы под списком был инпут,
// с помощью которого можно будет добавить новый элемент в конец списка ul.
// Сделайте так, чтобы новые li также можно было редактировать.

// let body = document.querySelector('body');
// let arrInfo = ['Информация сотрудника', 'Моё имя Владимир', 'Моя фамилия Пулин', 'Моё отчество Михайлович', 'Я работаю на севере'];
//
// function creatUlList() {
//
//     let list = document.createElement('ul');
//     let li;
//     for (let el of arrInfo) {
//         li = document.createElement('li');
//         li.textContent = el;
//         list.appendChild(li);
//     }
//
//     list.addEventListener('click', (e) => {
//         let input = document.createElement('input');
//         input.value = e.target.textContent;
//         e.target.textContent = '';
//         input.addEventListener('blur', () => {
//             e.target.textContent = input.value;
//             if (input.value === '') {
//                 e.target.textContent = 'Данные отсутствуют';
//             }
//         })
//         e.target.appendChild(input);
//     })
//
//     let inputNewLi = document.createElement('input');
//     inputNewLi.style.marginTop = '20px';
//     inputNewLi.style.marginLeft = '36px';
//     inputNewLi.setAttribute('placeholder', 'Введите текст');
//     inputNewLi.addEventListener('blur', () => {
//         li = document.createElement('li');
//         li.innerHTML = inputNewLi.value;
//         inputNewLi.value = '';
//         list.appendChild(li);
//     })
//
//
//
//     list.style.listStyleType = 'none';
//     body.appendChild(list);
//     list.insertAdjacentElement('afterEnd', inputNewLi);
//
//
// }
//
// creatUlList();


// Модифицируйте предыдущую задачу так, чтобы в конце каждой
// li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.


// let body = document.querySelector('body');
// let arrInfo = ['Информация сотрудника', 'Моё имя Владимир', 'Моя фамилия Пулин', 'Моё отчество Михайлович', 'Я работаю на севере'];
//
// function creatUlList() {
//     let list;
//     list = document.createElement('ul');
//     let text;
//     let li;
//     let link;
//     for (let el of arrInfo) {
//         li = document.createElement('li');
//         li.textContent = el;
//         list.appendChild(li);
//     }
//     list.addEventListener('click', (e) => {
//         let input = document.createElement('input');
//         input.value = e.target.textContent;
//         e.target.textContent = '';
//         input.addEventListener('blur', () => {
//             e.target.textContent = input.value;
//             if (input.value === '') {
//                 e.target.textContent = 'Данные отсутствуют';
//             }
//         })
//         e.target.appendChild(input);
//     })
//     list.style.listStyleType = 'none';
//     body.appendChild(list);
//     let inputNewLi = document.createElement('input');
//     inputNewLi.style.marginTop = '20px';
//     inputNewLi.style.marginLeft = '36px';
//     inputNewLi.setAttribute('placeholder', 'Введите текст');
//     inputNewLi.addEventListener('blur', function () {
//         let li = document.createElement('li');
//         li.innerHTML = inputNewLi.value;
//         inputNewLi.value = '';
//         list.appendChild(li);
//         text = li.innerHTML.replace(li.innerHTML, `<span>${li.innerHTML}</span>`)
//         li.innerHTML = text
//         link = document.createElement('a');
//         link.href = '';
//         link.innerHTML = ' remove';
//         link.style.textDecoration = 'none';
//         link.style.color = 'red';
//         li.insertAdjacentElement('beforeEnd', link);
//         link.addEventListener('click', (ev) => {
//             li.remove();
//             ev.preventDefault();
//         })
//     })
//     let lists = document.querySelectorAll('li');
//     for (let elList of lists) {
//         text = elList.innerHTML.replace(elList.innerHTML, `<span>${elList.innerHTML}</span>`)
//         elList.innerHTML = text
//         link = document.createElement('a');
//         link.href = '';
//         link.innerHTML = ' remove';
//         link.style.textDecoration = 'none';
//         link.style.color = 'red';
//         elList.insertAdjacentElement('beforeEnd', link);
//         link.addEventListener('click', (ev) => {
//             elList.remove();
//             link.remove();
//             ev.preventDefault();
//         })
//     }
//     list.insertAdjacentElement('afterEnd', inputNewLi);
// }
// creatUlList();

// Модифицируйте предыдущую задачу так, чтобы в конце каждой
// li также стояла ссылка 'перечеркнуть', с помощью которой
// можно будет перечеркнуть текст данного тега li.

//
// let body = document.querySelector('body');
// let arrInfo = ['Информация сотрудника', 'Моё имя Владимир', 'Моя фамилия Пулин', 'Моё отчество Михайлович', 'Я работаю на севере'];
// function creatUlList() {
//     let list = document.createElement('ul');
//     let text;
//     let li;
//     let links;
//     let links2;
//     let link;
//     for (let el of arrInfo) {
//         li = document.createElement('li');
//         li.textContent = el;
//         li.style.marginBottom = '10px'
//         list.appendChild(li);
//     }
//     list.addEventListener('click', (e) => {
//         let input = document.createElement('input');
//         input.value = e.target.textContent;
//         e.target.textContent = '';
//         input.addEventListener('blur', () => {
//             e.target.textContent = input.value;
//             if (input.value === '') {
//                 e.target.textContent = 'Данные отсутствуют';
//             }
//         })
//         e.target.appendChild(input);
//     })
//     list.style.listStyleType = 'none';
//     list.style.width = '800px'
//     body.appendChild(list);
//     let inputNewLi = document.createElement('input');
//     inputNewLi.style.marginTop = '20px';
//     inputNewLi.style.marginLeft = '36px';
//     inputNewLi.setAttribute('placeholder', 'Добавить новое поля');
//     inputNewLi.addEventListener('blur', function () {
//         if (inputNewLi.value !== '') {
//             let li = document.createElement('li');
//             li.innerHTML = inputNewLi.value;
//             inputNewLi.value = '';
//             list.appendChild(li);
//             text = li.innerHTML.replace(li.innerHTML, `<span>${li.innerHTML}</span>`)
//             li.innerHTML = text
//
//             link = document.createElement('a');
//             link.href = '';
//             link.innerHTML = ' Удалить';
//             link.style.textDecoration = 'none';
//             link.style.color = 'red';
//             link.style.float = 'right'
//             link.style.marginLeft = '200px';
//             li.insertAdjacentElement('beforeEnd', link);
//             link.addEventListener('click', (ev) => {
//                 li.remove();
//                 ev.preventDefault();
//             })
//             links2 = document.createElement('a');
//             links2.href = '';
//             links2.innerHTML = '  Вычеркнуть';
//             links2.style.textDecoration = 'none';
//             links2.style.color = 'green';
//             links2.style.marginRight = '50px';
//             links2.style.float = 'left'
//             link.insertAdjacentElement('beforeBegin', links2);
//             links2.addEventListener('click', function (ev) {
//                 li.firstElementChild.style.textDecoration = 'line-through';
//                 ev.stopPropagation();
//                 ev.preventDefault();
//             })
//         }
//     })
//
//     let lists = document.querySelectorAll('li');
//     for (let elList of lists) {
//         text = elList.innerHTML.replace(elList.innerHTML, `<span>${elList.innerHTML}</span>`)
//         elList.innerHTML = text
//         link = document.createElement('a');
//         link.href = '';
//         link.innerHTML = '  Удалить';
//         link.style.textDecoration = 'none';
//         link.style.color = 'red';
//         link.style.float = 'right'
//         link.style.marginLeft = '200px';
//
//
//         elList.insertAdjacentElement('beforeEnd', link);
//         link.addEventListener('click', (ev) => {
//             elList.remove();
//             ev.preventDefault();
//         })
//     }
//     let remove = document.querySelectorAll('span');
//     for (let el of remove) {
//         links = document.createElement('a');
//         links.href = '';
//         links.innerHTML = '  Вычеркнуть';
//         links.style.textDecoration = 'none';
//         links.style.color = 'green';
//         links.style.marginRight = '50px';
//         links.style.float = 'left'
//
//         el.insertAdjacentElement('afterEnd', links);
//         links.addEventListener('click', (ev) => {
//             el.style.textDecoration = 'line-through';
//             ev.stopPropagation();
//             ev.preventDefault();
//         })
//     }
//     list.insertAdjacentElement('afterEnd', inputNewLi);
// }
// creatUlList();

// Дан следующий массив с работниками:
// Выведите этих работников в HTML таблице.

// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// function creatTable() {
//     let body = document.querySelector('body');
//     let table;
//     let tr;
//     let td;
//     for (let i = 0; i < 1; i++) {
//         table = document.createElement('table');
//         body.appendChild(table);
//     }
//     for (let i = 0; i < 3; i++) {
//         tr = document.createElement('tr');
//         table.appendChild(tr);
//
//         for (let j = 0; j < employees.length; j++) {
//             td = document.createElement('td');
//                 td.textContent += employees.length;
//             tr.appendChild(td);
//         }
//     }
//     for (let el of employees) {
//         console.log(el);
//     }
// }
// creatTable();



let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 2; i <= arr.length - 1; i++) {
    console.log(arr[i -1]);
}