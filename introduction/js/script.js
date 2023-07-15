'use strict'

// ПОВТОР Манипулирование элементами с новыми фишками //

// Дан ol:
// Вставьте ему в конец li с текстом 'item'.
// <ol id="elem"></ol>
// let list = document.querySelector('#elem');
// let elemLi = document.createElement('li')
// elemLi.innerHTML = 'item';
// list.appendChild(elemLi);

// Дан ol и кнопка:
// Сделайте так, чтобы по клику на кнопку
// в конец списка добавлялся li с текстом 'item'.
// 	<ol id="elem"></ol>
// <button id="button">click me</button>
// let list = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// let elemLi = document.createElement('li')
// elemLi.innerHTML = 'item';
// btn.addEventListener('click', () => {
// 	list.append(elemLi)
// })
// Дан ol и кнопка. Сделайте так, чтобы по клику на
// кнопку в конец ol добавлялся тег li. Сделайте так,
// чтобы по клику на любой из добавленных li в конец его
// текста записывался восклицательный знак.
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
// </ul>
// <!--<button id="button">click me</button>-->

// let listUL = document.querySelector('ul');
// let btn = document.querySelector('#button')
//
// btn.addEventListener('click', () => {
// 	let nowLi = document.createElement('li');
// 	nowLi.innerHTML = '6';
// 	listUL.appendChild(nowLi);
// })
// listUL.addEventListener('click', (e) => {
// 	e.target.innerHTML = e.target.innerHTML + ' !'
//
// })

// Дан див. Запустите цикл, который добавит в
// наш див 5 инпутов. Пусть дан также абзац.
// Сделайте так, чтобы каждый из новых инпутов по
// потери фокуса записывал свой текст в абзац.
// <div class="elem"></div>
// <p id="parent"></p>

// let elem = document.querySelector('.elem')
// let btn = document.querySelector('#button')
// let par = document.querySelector('#parent')
//
// for (let i = 1; i < 5; i++) {
// 	let inp = document.createElement('input')
// 	elem.appendChild(inp)
// 	inp.addEventListener('blur', (e) => {
// 		par.textContent += e.target.value + ' '
// 	})
// }

// Дан следующий код:
// Сделайте так, чтобы любая li удалялась по клику на нее.
// <ul>
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 	</ul>

// let listUl = document.querySelectorAll('ul li');
// for (let el of listUl) {
// 	console.log(el)
// 	el.addEventListener('click', () => {
// 		el.remove();
// 	})
// }

// создаем таблицу:
// <table id="table"></table>
// let tab = document.querySelector('#table');
//
// for (let i = 0; i <= 3; i++) {
// 	let tr = document.createElement('tr');
// 	tab.style.border = '1px solid green'
// 	for (let j = 1; j <= 9; j++) {
// 		let td = document.createElement('td');
// 		td.textContent = j;
// 		td.style.border = '1px solid green'
// 		td.style.width = '20px'
// 		td.style.textAlign= 'center'
// 		tr.append(td);
// 	}
// 	tab.append(tr);
// }

// Дан элемент #elem:
// Вставьте перед этим элементом элемент с текстом 'new'.
// <ul id="parent">
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>

// let parent = document.querySelector('#parent')
// let elemLi = document.querySelector('#elem');
// let newLi = document.createElement('li')
// newLi.textContent = 'new'
//
// parent.insertBefore(newLi, elemLi )


// Дан элемент #elem:
// Вставьте перед этим элементом элемент с текстом 'new'.
// <ul id="parent">
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>

// let parent = document.querySelector('#parent')
// let elemLi = document.querySelector('#elem');
// let newLi = document.createElement('li')
// newLi.textContent = 'new'
//
// parent.insertBefore(newLi, elemLi )
// newLi.addEventListener('click', () => newLi.textContent = newLi.textContent + ' !')

// Дан элемент:
// Проверьте, является ли этот элемент элементом с классом www.
// <div id="elem" class="www"></div>
// let elemDiv = document.querySelector('#elem');
//
// console.log(elemDiv.matches('div.www'));

// Даны две переменные elem1 и elem2, содержащие два элемента:
// Проверьте, является ли элемент из elem2 потомком элемента из elem1.
// <div id="elem1">
// 		<p id="elem2"></p>
// 	</div>
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
//
// console.log(elem1.contains(elem2))









