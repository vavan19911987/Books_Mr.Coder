'use strict'

// ПОВТОР Практика с новыми фишками //

// Модифицируйте мой код так, чтобы по клику
// на абзац к его содержимому прибавлялась единица.
// <div id="parent"></div>
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
// 	p.addEventListener('click', (e) => {
// 		e.target.textContent = +e.target.textContent + 1
// 	})
// 	parent.appendChild(p);
// }

// Дан ul:
// Дан массив. Вставьте элементы
// этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// <ul id="elem"></ul>

// let listUl = document.querySelector('#elem');
//
// function getArr (arr) {
// 	let body = document.querySelector('body')
// 	let listUl = document.createElement('ul')
// 	body.append(listUl)
// 	return function () {
// 		for (let i = 0; i < arr.length; i++) {
// 			let li = document.createElement('li')
// 			li.textContent = arr[i]
// 			listUl.append(li)
// 			// Модифицируйте предыдущую задачу так,
// 			// чтобы по клику на любой из вставленных
// 			// элементов на экран выводился текст этого элемента.
// 			li.addEventListener('click', function noClick(e) {
// 				console.log(e.target.textContent)
// 				// Модифицируйте предыдущую задачу так,
// 				// чтобы по клику на li ей в конец добавлялся '!'.
// 				e.target.textContent = e.target.textContent + ' !'
// 				// Модифицируйте предыдущую задачу так,
// 				// чтобы по повторное нажатие на li не приводило
// 				// к добавлению второго '!'.
// 				this.removeEventListener('click', noClick)
//
// 			})
// 		}
// 	}
// }
//
// let listOne = getArr(['Лена', 'Даша', 'Кристина', 'Маша', 'Саша'])
// listOne()
// let listTwo = getArr(['Слава', 'Ксюша', 'Марина', 'Наташа', 'Вика'])
// listTwo()
// let listThree = getArr(['Лиза', 'Кирил', 'Миша', 'Надя', 'Вова'])
// listThree()
// let listFour = getArr(['Лада', 'Нисан', 'Москвич', 'Форд', 'ЗИЛ'])
// listFour()

// Дана пустая HTML таблица. С помощью двух
// вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
// function getTable () {
// 	let body = document.querySelector('body')
// 	let table = document.createElement('table')
// 	body.append(table)
// 	return function () {
// 		for (let i = 1; i <= 10; i++) {
// 			let tr = document.createElement('tr')
//
// 			for (let j = 1; j <= 5; j++) {
// 				let td = document.createElement('td')
// 				td.textContent = String('x')
// 				tr.append(td)
// 			}
// 			table.append(tr)
// 		}
// 	}
// }
//
// let tableOne = getTable()
// tableOne()

// Модифицируйте предыдущую задачу так, чтобы
// таблица создавалась размером 10 рядов на 5 колонок.

// Модифицируйте предыдущую задачу так, чтобы в
// каждую td добавлялся текст 'x'.

// Реализуйте генератор таблиц, ширина и высота
// таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
// <table id="table"></table>
// <input type="number" id="inp1">
// <input type="number" id="inp2">
// <button id="btn">Click My</button>

// let table = document.querySelector('#table')
// let inp1 = document.querySelector('#inp1')
// let inp2 = document.querySelector('#inp2')
// let btn = document.querySelector('button')
// let body = document.querySelector('body')
// let textTd = 1
//
// function getTable (val1, val2) {
// 	let table = document.createElement('table')
// 	body.append(table)
// 	for (let i = 1; i <= val1; i++) {
// 		let tr = document.createElement('tr')
// 		for (let j = 1; j <= val2; j++) {
// 			let td = document.createElement('td')
// 			td.textContent = textTd
// 			textTd++
// 			tr.append(td)
// 		}
// 		table.append(tr)
// 	}
// }
//
// btn.addEventListener('click', () => getTable(inp1.value, inp2.value))

// Не подсматривая в теоретическую часть урока,
// выведите элементы приведенного массива в виде HTML таблицы table.
// <table id="table"></table>
// let arr = [[1, 2, 3], [4, 5, 6],
// 	[7, 8, 9], [10, 11, 12]];
// function creaTable (arr) {
// 	let table = document.querySelector('#table');
// 	for (let subEl of arr) {
// 		let tr = document.createElement('tr');
// 		for (let el of subEl) {
// 			let td = document.createElement('td');
// 			td.textContent = String( Math.floor(Math.sqrt(el)))
// 			tr.append(td);
// 		}
// 		table.append(tr);
// 	}
// }
// creaTable(arr);

// Дан следующий массив с работниками:
// Выведите элементы этого массива в виде HTML таблицы.
// <table id="table"></table>
// let employees = [
// 	{name: 'Иван', age: 30, salary:
// 			400},
// 	{name: 'Кристина', age: 31, salary:
// 			500},
// 	{name: 'Владимир', age: 32, salary:
// 			600},
// 	{name: 'Женя', age: 32, salary:
// 			600},
// ];
//
// function creaTable (arr) {
// 	let table = document.querySelector('#table');
// 	for (let subEl of arr) {
// 		let tr = document.createElement('tr');
//
// 		let td1 = document.createElement('td');
// 		td1.textContent = subEl.name;
// 		tr.appendChild(td1)
//
// 		let td2 = document.createElement('td');
// 		td2.textContent = subEl.age;
// 		td2.addEventListener('click', (e) => e.target.textContent++)
// 		tr.appendChild(td2)
//
// 		let td3 = document.createElement('td');
// 		td3.textContent = subEl.salary;
// 		td3.addEventListener('click', (e) => {
// 			e.target.textContent = Math.floor(e.target.textContent * 10 / 100 + +e.target.textContent
// 		)})
// 		tr.appendChild(td3)
//
// 		table.appendChild(tr);
// 	}
// }
// creaTable(employees);

// Дана таблица размером 2 на 2:
// Дана также кнопка. Сделайте так, чтобы по
// нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
// <table id="table">
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// </table>
// td {
// 	width: 50px;
// 	height: 50px;
// 	border: 1px solid black;
// }
// <!--<button id="btn">Creat Table</button>-->

// let tablet = document.querySelectorAll('#table tr');
// let tab = document.querySelector('tbody');
// let btn = document.querySelector('#btn');
// let tr = document.createElement('tr')
// btn.addEventListener('click', () => {
// 	for (let i = 0; i <= 1; ++i) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
//
// 	for (let el of tablet) {
// 		let td = document.createElement('td');
//
// 		el.append(td);
// 	}
// 	tab.append(tr);
// })

// Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку
// увеличьте число в каждой ячейки таблицы в два раза.
// <table id="table">
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// </table>
// td {
// 	width: 50px;
// 	height: 50px;
// 	border: 1px solid black;
// }
// <!--<button id="btn">Creat Table</button>-->
// let tablet = document.querySelectorAll('#table td')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
// 	for (let el of tablet) {
// 		el.textContent = String(el.textContent ** 2)
// 	}
// })

// Дан следующий код:
// 	Сделайте так, чтобы по клику на кнопку в список
// 	добавлялся новый элемент. Сделайте так, чтобы любая
// 	li удалялась по клику на нее. Речь идет как о тех li,
// 	которые уже есть в списке, так о новых, созданных после
// 	нажатия на кнопку.
// <ul id="parent">
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 	</ul>
//
// <input type="submit" id="button">

// let listUl = document.querySelector('#parent');
// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
// 	let li = document.createElement('li');
// 	li.textContent = 'new li'
// 	listUl.appendChild(li);
// })
// listUl.addEventListener('click', (e) => {
// 	e.target.remove();
// })

// Пусть у нас абзац. Давайте рядом с
// ним сделаем ссылку, с помощью которой этот
// абзац можно будет удалить.
// <div id="parent">
// 	<p id="elem">text</p>
// 	<a href="#" id="remove">remove</a>
// </div>

// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
//
// remove.addEventListener('click', function() {
// 	elem.remove();
// 	event.preventDefault()
// });

// Дан тег ul. Добавьте в конец каждого тега li ссылку
// на удаления этого li из списка.
// <ul id="parent">
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>

// let listUl = document.querySelectorAll('#parent li');
// for (let elLi of listUl) {
// 	let remove = document.createElement('a');
// 	remove.href = '#'
// 	remove.innerHTML = ' Удвлить';
// 	elLi.append(remove);
// 	remove.addEventListener('click', (e) => {
// 		elLi.remove();
// 		e.preventDefault();
// 	})
// }
// Дана HTML таблица. Добавьте в нее еще одну
// колонку, в которой для каждого ряда таблицы будет
// стоять ссылка на удаление этого ряда.
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

// let table = document.querySelectorAll('#table tr');
// for (let elTab of table) {
// 	let td = document.createElement('td');
// 	let link = document.createElement('a');
// 	link.href = '';
// 	link.textContent = ' Удалить';
// 	td.append(link);
// 	link.addEventListener('click', (e) => {
// 		elTab.remove();
// 		e.preventDefault();
// 	})
// 	elTab.append(td)
// }

// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
//
// input.value = elem.textContent; // записываем в инпут текст абзаца
//
// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });
// Самостоятельно, не подсматривая в мой код, решите описанную задачу.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function noClick() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove();
// 		elem.addEventListener('click', noClick)
// 	});
// 	this.removeEventListener('click', noClick)
// 	elem.parentElement.appendChild(input);
// });

// Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem = document.querySelector('#elem')
// elem.addEventListener('click', function func () {
// 	let input = document.createElement('input')
// 	input.value = elem.textContent
// 	elem.textContent = ''
// 	elem.appendChild(input)
// 	input.addEventListener('blur', function () {
// 		elem.textContent = this.value
// 		elem.addEventListener('click', func)
// 	})
// 	elem.removeEventListener('click', func)
// })

// Дан тег ul. Сделайте так, чтобы по клику на любую li
// в ней появлялся инпут, с помощью которого можно будет поредатировать
// текст этой li.
// <ul id="parent">
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>

// let listUl = document.querySelectorAll('#parent li')
// for (let elem of listUl) {
// 	elem.addEventListener('click', function func () {
// 		let input = document.createElement('input')
// 		input.value = elem.textContent
// 		elem.textContent = ''
// 		elem.appendChild(input)
// 		input.addEventListener('blur', function () {
// 			elem.textContent = this.value
// 			elem.addEventListener('click', func)
// 		})
// 		elem.removeEventListener('click', func)
// 	})
// }

// Дана HTML таблица. Сделайте так, чтобы по клику
// на любую ячейку в ней появлялся инпут для редактирования
// текста этой ячейки.
// <table id="table">
//     <tr>
//         <td>1</td>
//         <td>2</td>
//     </tr>
//     <tr>
//         <td>3</td>
//         <td>4</td>
//     </tr>
//     <tr>
//         <td>3</td>
//         <td>4</td>
//     </tr>
//     <tr>
//         <td>3</td>
//         <td>4</td>
//     </tr>
// </table>

// function creaTable() {
// 	let table =  document.querySelectorAll('#table td');
// 	for (let elem of table) {
// 		elem.addEventListener('click', function func() {
// 			let input = document.createElement('input');
// 			input.value = elem.textContent;
// 			elem.textContent = '';
// 			elem.appendChild(input)
// 			input.addEventListener('blur', () => {
// 				elem.textContent = input.value
// 				elem.addEventListener('click', func)
// 			})
// 			elem.removeEventListener('click', func)
// 		})
// 	}
// }
// creaTable();

// Дан следующий HTML код:
// Добавьте ссылку на удаление в конец каждого абзаца.
// Сделайте так, чтобы по клику на span в нем появлялся
// инпут для редактирования.
// <div id="parent">
// 		<p><span>text1</span></p>
// 		<p><span>text2</span></p>
// 		<p><span>text3</span></p>
// 	</div>

// let parent = document.querySelectorAll('#parent p')
// let div = document.querySelector('#parent')
// parent.forEach((el) => {
// 	console.log(el)
// 	let link = document.createElement('a');
// 	link.href = '#'
// 	link.textContent = ' Delete'
// 	link.style.textDecoration = 'none'
// 	el.appendChild(link);
// })
// console.log(div)

// Пусть теперь изначально тегов span нет:
// Оберните сначала текст абзаца в теги span,
// добавьте к этим тегам возможность редактирования,
// а затем добавьте в конец каждого абзаца ссылку на удаление.
// <div id="parent">
//     <p>text1</p>
//     <p>text2</p>
//     <p>text3</p>
// </div>

// let parent = document.querySelectorAll('#parent p');
// parent.forEach((el) => {
// 	let span = document.createElement('span');
// 	span.textContent = el.textContent
// 	el.textContent = '';
// 	el.appendChild(span)
// 	span.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = span.textContent
// 		span.textContent = '';
// 		span.appendChild(input);
// 		input.addEventListener('blur', function () {
// 			span.textContent = input.value;
// 			span.addEventListener('click', func)
// 		})
// 		span.removeEventListener('click', func)
// 	})
// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = ' Delete'
// 	link.style.textDecoration = 'none';
// 	el.appendChild(link)
// 	link.addEventListener('click', (e) => {
// 		el.remove();
// 		e.preventDefault();
// 	})
// })

// Дан следующий HTML код:
// Добавьте в конец каждого абзаца ссылку,
// по клику на которую текст абзаца будет
// перечеркиваться (а ссылка - нет).
// <p>text1</p>
// <p>text2</p>
// <p>text3</p>

// document.querySelectorAll('p').forEach((el) => {
// 	let span = document.createElement('span');
// 	span.textContent = el.textContent;
// 	el.textContent = '';
// 	el.append(span)
// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = ' Through'
// 	link.style.textDecoration = 'none';
// 	link.addEventListener('click', function () {
// 		span.classList.add('lineThrough')
// 		this.remove();
// 	})
// 	el.append(link)
// 	console.log(el)
// })

// Дана некоторая HTML таблица. Добавьте
// в эту таблицу еще одну колонку со ссылкой.
// По нажатию на эту ссылку ряд с этой ссылкой
// должен стать зеленого фона.
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
//  let tablet = document.querySelectorAll('#table tr');
// tablet.forEach((el) => {
// 	let td = document.createElement('td');
// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = ' Add Background '
// 	link.classList.add('test')
// 	link.addEventListener('click', () => {
// 		el.classList.toggle('bg')
// 	})
// 	td.append(link)
// 	el.append(td)
// 	console.log(el);
// })

// Первый способ
// Свяжем кнопки и абзацы следующим образом:
// <p id="elem1">1</p>
// <button data-elem="elem1">toggle</button>
// <p id="elem2">2</p>
// <button data-elem="elem2">toggle</button>
// <p id="elem3">3</p>
// <button data-elem="elem3">toggle</button>

// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

// Второй способ
// Расставлять id и data-атрибуты не очень удобно.
// Давайте сделаем так, чтобы связь была по порядковому
// номеру: пусть первая кнопка скрывает первый абзац, вторая
// кнопка - второй и так далее.
// Реализуем описанное:
// <p id="elem1">1</p>
// <button data-elem="elem1">toggle</button>
// <p id="elem2">2</p>
// <button data-elem="elem2">toggle</button>
// <p id="elem3">3</p>
// <button data-elem="elem3">toggle</button>

// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
//
// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }

// Третий способ
// Как можно увидеть, абзац, связанный с кнопкой,
// является ее соседом слева. Можно это использовать в качестве связи:
// <p id="elem1">1</p>
// <button data-elem="elem1">toggle</button>
// <p id="elem2">2</p>
// <button data-elem="elem2">toggle</button>
// <p id="elem3">3</p>
// <button data-elem="elem3">toggle</button>

// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }

// Дана HTML table. Сделайте так, чтобы по
// нажатию на любой пункт списка он активировался красным фоном.
// Модифицируйте предыдущую задачу так, чтобы по
// нажатию на активированный пункт списка активация с него снималась.
// <table id="table">
//     <tr>
//         <td>1</td>
//         <td>2</td>
//     </tr>
//     <tr>
//         <td>3</td>
//         <td>4</td>
//     </tr>
//     <tr>
//         <td>1</td>
//         <td>2</td>
//     </tr>
//     <tr>
//         <td>3</td>
//         <td>4</td>
//     </tr>
// </table>

// let table = document.querySelectorAll('#table td')
// table.forEach((el) => {
// 	el.addEventListener('mouseenter', () => {
// 		el.classList.add('bg')
// 	})
// 	el.addEventListener('mouseout', () => {
// 		el.classList.remove('bg')
// 	})
// })
//
// let tds = document.querySelectorAll('#table td');
// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color === 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
// 		this.classList.add(color);
// 	});
// }

// let tds = document.querySelectorAll('#table td');
// let i = 0;
// let colors = ['color1', 'color2', 'color3'];
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (i === colors.length) {
// 			i = 0;
// 		}
// 		this.classList.add(colors[i]);
// 		i++;
// 	});
// }

// Дан массив. Выведите его элементы в виде списка ul.
// <ul class="list"></ul>
// <input type="text" id="inp">
// let arr = ['Lena', 'Sasha', 'Masha', 'Dasha']
// let listUl = document.createElement('ul')
// listUl.classList.add('list')
// document.querySelector('body').append(listUl)
// let li
// arr.forEach(function (el) {
// 	let li = document.createElement('li')
// 	li.textContent = el
// 	listUl.append(li)
// 	let span = document.createElement('span')
// 	span.textContent = li.textContent
// 	li.textContent = ''
// 	li.append(span)
// 	let link = document.createElement('a')
// 	link.href = '#'
// 	link.textContent = ' Delete'
// 	link.classList.add('link')
// 	link.addEventListener('click', () => li.remove())
// 	span.insertAdjacentElement('afterend', link)
// 	let link2 = document.createElement('a')
// 	link2.textContent = ' Перечеркнуть'
// 	link2.href = '#'
// 	link2.classList.add('link')
// 	link2.style.paddingLeft = '10px'
// 	link.insertAdjacentElement('afterend', link2)
// 	link2.addEventListener('click', () => span.classList.toggle('line'))
// })
//
// function redItem () {
// 	let span = document.querySelectorAll('span')
// 	span.forEach(function (el) {
// 		el.addEventListener('click', function func (e) {
// 			console.log('yes')
// 			let input = document.createElement('input')
// 			input.value = el.textContent
// 			el.textContent = ''
// 			el.append(input)
// 			input.addEventListener('blur', () => {
// 				el.textContent = input.value
// 				el.addEventListener('click', func)
// 			})
// 			el.removeEventListener('click', func)
// 		})
// 	})
// }
//
// redItem()
// function addNewLi () {
// 	let addInputLi = document.createElement('input')
// 	addInputLi.style.display = 'block'
// 	listUl.insertAdjacentElement('afterEnd', addInputLi)
// 	addInputLi.addEventListener('blur', () => {
// 		let addLi = document.createElement('li')
// 		addLi.textContent = addInputLi.value
// 		addInputLi.value = ''
// 		listUl.append(addLi)
// 		let span = document.createElement('span')
// 		span.textContent = addLi.textContent
// 		addLi.textContent = ''
// 		addLi.append(span)
// 		let link = document.createElement('a')
// 		link.href = '#'
// 		link.textContent = ' Delete'
// 		link.classList.add('link')
// 		link.addEventListener('click', () => addLi.remove())
// 		span.insertAdjacentElement('afterend', link)
// 		let link2 = document.createElement('a')
// 		link2.textContent = ' Перечеркнуть'
// 		link2.href = '#'
// 		link2.classList.add('link')
// 		link2.style.paddingLeft = '10px'
// 		link.insertAdjacentElement('afterend', link2)
// 		link2.addEventListener('click', () => span.classList.toggle('line'))
// 		redItem()
// 	})
// }
// addNewLi()

// Модифицируйте предыдущую задачу так,
// чтобы по клику на любую li в ней появлялся инпут, с помощью
// которого ее можно будет поредактировать.

// Модифицируйте предыдущую задачу так,
// чтобы под списком был инпут, с помощью которого можно будет
// добавить новый элемент в конец списка ul. Сделайте так,
// чтобы новые li также можно было редактировать.

// Модифицируйте предыдущую задачу так,
// чтобы в конце каждой li стояла ссылка 'удалить', с помощью
// которой можно будет удалить эту li из ul.

// Модифицируйте предыдущую задачу так,
// чтобы в конце каждой li также стояла ссылка 'перечеркнуть',
// с помощью которой можно будет перечеркнуть текст данного тега li.

//Массив объектов и таблица

// Дан следующий массив с работниками:
// Выведите этих работников в HTML таблице.
// let employees = [
// 	{
// 		name: 'employee1',
// 		age: 30,
// 		salary: 400
// 	},
// 	{
// 		name: 'employee2',
// 		age: 31,
// 		salary: 500
// 	},
// 	{
// 		name: 'employee3',
// 		age: 32,
// 		salary: 600
// 	},
// ]
//
// let table = document.createElement('table')
// table.classList.add('table')
// document.querySelector('body').append(table)
//
// for (let elem of employees) {
// 	let tr = document.createElement('tr')
// 	table.append(tr)
// 	let span = document.createElement('span')
// 	let span2 = document.createElement('span')
// 	let span3 = document.createElement('span')
//
//
// 	let td1 = document.createElement('td')
// 	span.textContent = elem.name
// 	tr.appendChild(td1)
// 	td1.append(span)
//
// 	let td2 = document.createElement('td')
// 	span2.textContent = elem.age
// 	td2.append(span2)
// 	tr.append(td2)
//
// 	let td3 = document.createElement('td')
// 	span3.textContent = elem.salary
// 	td3.append(span3);
// 	tr.append(td3)
//
//
// 	let tdDel = document.createElement('td')
// 	let link = document.createElement('a')
// 	link.href = '#'
// 	link.textContent = ' Delete'
// 	link.classList.add('link')
// 	link.addEventListener('click', () => {
// 		tr.remove()
// 	})
// 	tdDel.append(link)
// 	tr.append(tdDel)
// }
//
//
//
//
// function redItem () {
// 	let span = document.querySelectorAll('span')
// 	span.forEach(function (el) {
// 		el.addEventListener('click', function func (e) {
// 			let input = document.createElement('input')
// 			input.value = el.textContent
// 			el.textContent = ''
// 			input.style.width = 'text-content'
// 			el.append(input)
// 			input.addEventListener('blur', () => {
// 				el.textContent = input.value
// 				el.addEventListener('click', func)
// 			})
//
// 			el.removeEventListener('click', func)
//
// 		})
// 	})
// }
//
// redItem()
//
// let inputSalary = document.createElement('input')
// inputSalary.value = 'Зарплата сотрудника'
// inputSalary.classList.add('inp')
// table.insertAdjacentElement('afterend', inputSalary)
//
// let inputAge = document.createElement('input')
// inputAge.value = 'Возраст сотрудника'
// inputAge.classList.add('inp')
//
// table.insertAdjacentElement('afterend', inputAge)
//
// let inputName = document.createElement('input')
// inputName.value = 'Имя сотрудника'
// inputName.classList.add('inp')
//
// table.insertAdjacentElement('afterend', inputName)
//
// let inp = document.querySelectorAll('.inp')
//
// for (let inpElement of inp) {
// 	inpElement.addEventListener('focus', () => inpElement.value = '')
// }
// let button = document.createElement('button')
// button.textContent = ' Создать сотрудника'
// button.style.marginTop = '20px'
// table.insertAdjacentElement('afterend', button)
//
// button.addEventListener('click', function () {
// 	console.log(inp[0].value)
// 	let tr = document.createElement('tr')
// 	let span4 = document.createElement('span');
// 	let span5 = document.createElement('span');
// 	let span6 = document.createElement('span');
//
// 	let td4 = document.createElement('td')
// 	span4.textContent = inp[0].value
// 	td4.append(span4)
// 	tr.append(td4)
//
// 	let td5 = document.createElement('td')
// 	span5.textContent = inp[1].value
// 	tr.append(td5)
// 	td5.append(span5)
//
// 	let td6 = document.createElement('td')
// 	span6.textContent = inp[2].value
// 	tr.append(td6)
// 	td6.append(span6)
//
// 	table.append(tr)
// 	let tdDel = document.createElement('td')
// 	let link = document.createElement('a')
// 	link.href = '#'
// 	link.textContent = ' Delete'
// 	link.classList.add('link')
// 	link.addEventListener('click', () => {
// 		tr.remove()
// 	})
// 	tdDel.append(link)
// 	tr.append(tdDel)
//
// 	redItem()
// })

// Добавьте ячейкам созданной
// таблицы возможность редактирования.

// Добавьте в вашу таблицу новую колонку
// со ссылкой на удаления ряда из таблицы.

// Сделайте под таблицей 3 инпута и кнопку
// для добавление нового работника. Пусть в инпуты
// вводятся имя, возраст и зарплата, и по нажатию на
// кнопку новый работник добавляется в таблицу. Реализуйте
// редактирование ячеек для вновь добавленных работников.

//Массив объектов и список

// Дан следующий массив с работниками:
// Выведите на экран каждого работника в своем теге li тега ul.
// let employees = [
// 		{
// 			name: 'employee1',
// 			age: 30,
// 			salary: 400
// 		},
// 		{
// 			name: 'employee2',
// 			age: 31,
// 			salary: 500
// 		},
// 		{
// 			name: 'employee3',
// 			age: 32,
// 			salary: 600
// 		},
// 	];
//
// let ul = document.createElement('ul');
// document.querySelector('body').append(ul);
// let link;
//
// function getArr () {
// 	for (let el of employees) {
// 		let li = document.createElement('li');
// 		let span = document.createElement('span');
//
// 		span.textContent = el.name
// 		li.append(span)
//
// 		let span2 = document.createElement('span');
// 		span2.textContent = el.age
// 		li.append(span2)
// 		ul.append(li)
//
// 		let span3 = document.createElement('span');
// 		span3.textContent = el.salary
// 		li.append(span3)
// 		ul.append(li)
//
// 		addLink()
// 		link.addEventListener('click', () => {
// 			li.remove();
// 		})
// 	}
// }
// getArr();
//
// function addLink() {
// 	let li = document.querySelectorAll('li')
// 	link = document.createElement('a')
// 	link.textContent = ' Delete'
// 	link.href = '#'
// 	link.classList.add('link')
// 	li.forEach((el) => {
// 		el.appendChild(link)
// 	})
// }
//
// function redItem () {
// 	let span = document.querySelectorAll('span')
// 	span.forEach(function (el) {
// 		el.addEventListener('click', function func (e) {
// 			let input = document.createElement('input')
// 			input.value = e.target.textContent
// 			el.textContent = ''
// 			el.append(input)
// 			input.addEventListener('blur', () => {
// 				el.textContent = input.value
// 				el.addEventListener('click', func)
// 			})
// 			el.removeEventListener('click', func)
// 		})
// 	})
// }
// redItem()
//
//
// function nemMan () {
// 	let inputSalary = document.createElement('input')
// 	inputSalary.value = 'Зарплата сотрудника'
// 	inputSalary.classList.add('inp')
// 	ul.insertAdjacentElement('afterend', inputSalary)
//
// 	let inputAge = document.createElement('input')
// 	inputAge.value = 'Возраст сотрудника'
// 	inputAge.classList.add('inp')
//
// 	ul.insertAdjacentElement('afterend', inputAge)
//
// 	let inputName = document.createElement('input')
// 	inputName.value = 'Имя сотрудника'
// 	inputName.classList.add('inp')
// 	ul.insertAdjacentElement('afterend', inputName)
//
// 	let inp = document.querySelectorAll('.inp')
// 	for (let inpElement of inp) {
// 		inpElement.addEventListener('focus', () => inpElement.value = '')
// 	}
//
//
// 	let btn = document.createElement('button');
// 	btn.textContent = 'New man'
// 	btn.style.display = 'block'
// 	ul.insertAdjacentElement('afterend', btn)
//
//
//
// 	btn.addEventListener('click', () => {
// 		let li = document.createElement('li');
// 		let span4 = document.createElement('span')
// 		span4.textContent = inputName.value
// 		li.append(span4)
//
// 		let span5 = document.createElement('span')
// 		span5.textContent = inputAge.value
// 		li.append(span5)
//
// 		let span6 = document.createElement('span')
// 		span6.textContent = inputSalary.value
// 		li.append(span6);
// 		ul.append(li)
//
// 		addLink()
//
// 		link.addEventListener('click', () => {
// 			li.remove();
// 		})
// 		redItem()
//
// 	})
//
// }
// nemMan();
// Сделайте так, чтобы по клику на имя,
// возраст или зарплату работника появлялся инпут
// для редактирования этого поля.

// Добавьте в конец каждого тега li
// ссылку на удаление этого li из списка.

// Под списком сделайте форму для добавления нового работника.

































































