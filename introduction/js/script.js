'use strict'

// ПОВТОР Функции и DOM NEW //

// Сделайте функцию setAttr, которая будет менять атрибут DOM элементу.
// Пусть первым параметром функция принимает селектор
// элемента, вторым - имя атрибута, а третьим - его новое значение.
// function setAttr(className, nameAttr, valAttr) {
// 	let elem = document.querySelector(className);
// 	elem.setAttribute(nameAttr, valAttr);
// }
//
// setAttr('.el1', 'href', 'https//google.com');
// setAttr('.el2', 'href', 'https//google.com');

// Сделайте функцию appendText, которая первым
// параметром будет принимать селектор, а вторым -
// текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

// function appendText (select, textSelect) {
// 	let itemElem = document.querySelectorAll(select)
// 	// itemElem.forEach((el) => {
// 	// 	el.append(" " + textSelect);
// 	// }) // в конец
// 	itemElem.forEach((el) => {
// 		el.prepend(textSelect + " ");
// 	}) // в начало
// }
//
// appendText('p', 'Hello world')

// Даны абзацы. С помощью созданной нами функции
// forEach для каждого абзаца добавьте в конец его
// текста восклицательный знак.
//
// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
// 	for (let elem of elems) {
// 		func(elem);
// 	}
// }
// forEach('.elem', (elem) => {
// 	elem.textContent = elem.textContent + ' !'
// })

// Даны абзацы. С помощью созданной нами функции
// forEach для каждого абзаца добавьте ему в начало его порядковый номер.

// function forEach (selector, func) {
// 	let elems = document.querySelectorAll(selector)
// 	for (let i = 0; i < elems.length; i++) {
// 		func(elems[i], i)
// 	}
// }
//
// forEach('.elem', (el, i) => {
// 	el.prepend(i + " ")
// })

// Сделайте функцию appendText,
// которая первым параметром будет принимать
// DOM элемент, а вторым - текст. Сделайте так, чтобы данная
// функция добавляла текст в конец этого элемента.
//<p class="elem1">1</p>
// <p class="elem2">2</p>

// function appendText (elem, text) {
// 	elem.append(' ' + text);
// }
// let elem1 = document.querySelector('.elem1');
// appendText(elem1, 'Hello World')
//
// let elem2 = document.querySelector('.elem2')
// appendText(elem2, 'Hi')

// Даны абзацы. Получите их, переберите циклом и
// каждому добавьте в конец '!' с помощью функции appendText,
// сделанной в предыдущей задаче.

// function appendText (elem, func) {
// 	for (let el of elem) {
// 		func(el)
// 	}
// }
// let elem = document.querySelectorAll('p');
// appendText(elem, (el) => {
// 	el.append(" " + '!')
// })

// Сделайте функцию setValue, которая первым параметром будет
// принимать ссылку на инпут, а вторым - текст. Сделайте так,
// чтобы данная функция устанавливала переданный текст в value инпута.

// function setValue (linkInput, nameAtr, valText) {
// 	linkInput.setAttribute(nameAtr, valText)
// }
// let input = document.querySelector('#inp');
//
// setValue(input, 'value', 'Name')
//

// Сделайте функцию appendText, которая первым
// параметром будет принимать массив DOM элементов,
// а вторым - текст. Сделайте так, чтобы данная функция
// добавляла текст в конец переданных элементов.
// <p class="elem">1</p>
// <p class="elem">2</p>
// <p class="elem">3</p>
// <p class="elem">4</p>
// <p class="elem">5</p>

// function appendText (elems, text) {
// 	for (let elem of elems) {
// 		// elem.prepend(text + " ")
// 		// elem.append(" " + text)
// 		elem.textContent = text
// 	}
// }
//
// let elems = document.querySelectorAll('.elem');
// appendText(elems, 'Hi')

// Сделайте функцию appendElem,
// которая первым параметром будет принимать ссылку на DOM объект,
// в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы
// данная функция создавала новую li с переданным текстом и
// добавляла ее в конец переданного тега ul.

// function appendElems (linkElem, text) {
// 	let li = document.createElement('li');
// 	li.textContent = text
// 	linkElem.style.listStyle = 'none'
// 	linkElem.append(li)
// }
// let list = document.querySelector('#list')
// appendElems(list,'Hi')

// Дан массив и ul. С помощью функции appendElem,
// созданной в предыдущей задаче, запишите каждый элемент
// массива в отдельную li в этом ul.

// function appendElems (linkElem, textArr) {
// 	for (let el of textArr) {
// 		let li = document.createElement('li');
// 		li.textContent = el
// 		linkElem.style.listStyle = 'none'
// 		linkElem.append(li)
// 	}
// }
// let list = document.querySelector('#list')
// appendElems(list,['hi', 'world', 'cool'])

// Вот заготовка описанной функции:
// Допишите код представленной выше заготовки функции.
// 	Потестируйте работу готовой функции.
// <div class="parent"></div>

// function createTable (rows, cols, parent) {
// 	let table = document.createElement('table')
// 	for (let i = 0; i < rows; i++) {
// 		let tr = document.createElement('tr')
// 		table.append(tr)
// 		for (let i = 0; i < cols; i++) {
// 			let td = document.createElement('td')
// 			tr.append(td)
// 		}
// 	}
// 	parent.appendChild(table)
// }
// let div = document.querySelector('.parent');
// createTable(4,3, div)

// Переделайте вашу функцию createTable в соответствии с описанным в теории.

// function createTable (rows, cols, parent) {
// 	let table = document.createElement('table')
// 	for (let i = 0; i < rows; i++) {
// 		let tr = document.createElement('tr')
// 		table.append(tr)
// 		for (let i = 0; i < cols; i++) {
// 			let td = document.createElement('td')
// 			tr.append(td)
// 		}
// 	}
// 	return table
// }
// let div = document.querySelector('.parent');
// let table = createTable(4,3)
// div.appendChild(table)

// Пусть у нас есть вот такой див с абзацами:
// С помощью функции createTable создайте новую таблицу,
// а затем вставьте ее в конец дива.
// <div id="elem">
// 		<p>1</p>
// 		<p>2</p>
// 		<p>3</p>
// 	</div>
// function createTable (rows, cols, parent) {
// 	let table = document.createElement('table')
// 	for (let i = 0; i < rows; i++) {
// 		let tr = document.createElement('tr')
// 		table.append(tr)
// 		for (let i = 0; i < cols; i++) {
// 			let td = document.createElement('td')
// 			tr.append(td)
// 		}
// 	}
// 	return table
// }
// let div = document.querySelector('#elem');
// let table = createTable(3,4)
// // div.insertAdjacentElement('afterend',table)
// div.append(table)


// Реализуйте описанную функцию. Проверьте ее работу.

// function createTableByArr (arr) {
// 	let table = document.createElement('table')
// 	for (let elTr of arr) {
// 		let tr = document.createElement('tr')
// 		table.append(tr)
// 		for (let elTd of elTr) {
// 			let td = document.createElement('td')
// 			td.textContent = elTd;
// 			tr.append(td)
// 		}
// 	}
// 	return table
// }
//
// let div = document.querySelector('#elem');
// let table = createTableByArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// div.append(table)
