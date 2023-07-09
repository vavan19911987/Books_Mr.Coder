'use strict'

// ПОВТОР Объект Event//

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(event) {
// 	console.log(event)
// });

// Сделайте так, чтобы при движении мышки по странице,
// отображались координаты курсора,
// подобно тому, как это сделано в следующем образце:
// let elem = document.getElementById('elem');
//
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// В следующем коде в двум событиям привязан один и тот же обработчик:
// Допишите код функции func так, чтобы при клике на элемент
// этот элемент красился в зеленый цвет, а при двойном клике - в красный.
// <button id="elem">text</button>

// let elem = document.querySelector('#elem')
// elem.addEventListener('click', func)
// elem.addEventListener('dblclick', func)
// function func (event) {
// 	if (event.type === 'click') {
// 		this.style.background = 'green'
// 	} else if (event.type === 'dblclick') {
// 		this.style.background = 'red'
// 	}
// }
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(event) {
// 	console.log(event.target); // выведет наш абзац
// 	console.log(this);         // выведет наш див
// });

// Пусть у вас есть список ul с тегами li:
//
// 	ul {
// 	padding: 30px;
// 	border: 1px solid red;
// }
// li {
// 	list-style-type: none;
// 	margin-bottom: 20px;
// 	border: 1px dashed black;
// }
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

// Привяжите к тегу ul обработчик клика.
// В этом обработчике проверяйте с помощью свойства tagName,
// по какому тегу был клик. Если клик был по тегу li - добавьте в конец
// текста этого тега восклицательный знак. А если клик был по тегу ul -
// выведите информацию об этом в консоль.

// let list = document.querySelector('#elem');
// list.addEventListener('click', (event) => {
// 	if (event.target.tagName === 'LI') {
// 		event.target.textContent = event.target.textContent + ' ' + '!'
// 	} else if (event.target.tagName === 'UL') {
// 		console.log('this is click no " LI " this is click " UL "')
// 	}
// })

// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
// 	console.log(event.key);
// 	if (event.key === 'q') {
// 		console.log('this is "Q"')
// 	}
// });

// elem.addEventListener('keypress', function(event) {
// 	console.log(event.code);
// 	console.log(event.key);
// });

// Дан абзац и инпут. В него вводится текст
// и нажимается клавиша Enter. Сделайте так, чтобы
// в этот момент введенный текст попадал в абзац под инпутом,
// а содержимое инпута очищалось.
// <input type="text" id="inp">
// <p id="pap"></p>

// let inp = document.querySelector('#inp');
// let par = document.querySelector('#pap');
// inp.addEventListener('keypress', (e) => {
// 	if (e.key === 'Enter') {
// 		par.innerHTML =  inp.value;
// 	}
// })

// Самостоятельно напишите код,
// который будет демонстрировать всплытие событий.
// Проверьте на нем всплытие различных типов событий.
// <div class="block1">
//     <div class="block2">
//         <div class="block3"></div>
//     </div>
// </div>
// .block1 {
//     width: 300px;
//     height: 300px;
//     background: #0e751f;
// }
// .block2 {
//     width: 230px;
//     height: 230px;
//     background: #0f128a;
// }
// .block3 {
//     width: 130px;
//     height: 130px;
//     background: red;
// }
// .block1,.block2,.block3 {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// let el1 = document.querySelector('.block1')
// let el2 = document.querySelector('.block2')
// let el3 = document.querySelector('.block3')
// el1.addEventListener('click', () => {
// 	alert('green');
// })
// el2.addEventListener('click', () => {
// 	alert('blue');
// })
// el3.addEventListener('click', () => {
// 	alert('red');
// })

///

// let div = document.querySelector('div');
//
// div.addEventListener('click', function(event) {
// 	if (event.target.matches('div')) {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.matches('p')) {
// 		console.log('клик именно по абзацу');
// 	}
// });

// Даны следующие элементы:
//
// 	<div>
// 		<ul>
// 			<li>1</li>
// 			<li>2</li>
// 			<li>3</li>
// 		</ul>
// 	</div>
// div, ul, li {
// 	padding: 20px;
// }
//
// div {
// 	border: 1px solid red;
// }
// ul {
// 	border: 1px solid orange;
// }
// li {
// 	border: 1px solid green;
// }
// Навешайте на див обработчик клика.
// В этом обработчике определите,
// в каком из тегов сработало событие.

// let getDiv = document.querySelector('#div')
// getDiv.addEventListener('click', (e) => {
// 	if (e.target.matches('div')) {
// 		console.log('this is DIV')
// 	} else if (e.target.matches('ul')) {
// 		console.log('this is UL')
// 	} else if (e.target.matches('li')) {
// 		e.target.textContent = e.target.textContent + ' ' + '!'
// 		console.log('this is LI')
// 	}
// })

/////
// let el1 = document.querySelector('.block1')
// let el2 = document.querySelector('.block2')
// let el3 = document.querySelector('.block3')
// el1.addEventListener('click', () => {
// 	alert('green');
// })
// el2.addEventListener('click', (e) => {
// 	e.stopImmediatePropagation()
// 	alert('blue Первый');
// })
// el2.addEventListener('click', (e) => {
// 	e.stopPropagation()
// 	alert('blue Второй');
// })
// el3.addEventListener('click', (e) => {
// 	alert('red');
// })

// <div id="parent">
//     <button>click me</button>
//     <div id="block">
//         text
//     </div>
// </div>

// Самостоятельно реализуйте корректную работу описанной задачи.

// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
//
// button.addEventListener('click', function(e) {
// 	e.stopImmediatePropagation()
// 	block.classList.add('active');
// });
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });


// Погружение событий в JavaScript
// let elem1 = document.querySelector('.block1')
// let elem2 = document.querySelector('.block2')
// let elem3 = document.querySelector('.block3')
//
// elem1.addEventListener('click', function () {
// 	console.log('зеленый - погружение')
// 	alert('зеленый - погружение')
// }, true)
// elem1.addEventListener('click', function () {
// 	console.log('зеленый - всплытие')
// 	alert('зеленый - всплытие')
// }, false)
//
// elem2.addEventListener('click', function (e) {
// 	console.log('голубой - погружение')
// 	alert('голубой - погружение')
// }, true)
// elem2.addEventListener('click', function () {
// 	console.log('голубой - всплытие')
// 	alert('голубой - всплытие')
// }, false)
//
// elem3.addEventListener('click', function (e) {
// 	e.stopImmediatePropagation()
// 	console.log('красный - погружение')
// 	alert('красный - погружение')
// }, true)
// elem3.addEventListener('click', function () {
// 	console.log('красный- всплытие')
// 	alert('красный- всплытие')
// }, false)


// Навешивание обработчиков на новые элементы в JavaScript
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// function handler() {
// 	this.textContent = this.textContent
// 		+ '!';
// }
// for (let item of items) {
// 	item.addEventListener('click', handler);
// }
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
// 	item.addEventListener('click', handler);
// 	list.appendChild(item);
// });

// Делегирование событий в JavaScript
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
// 	list.appendChild(item);
// });
// list.addEventListener('click', function func(event) {
// 	event.target.textContent = event.target.textContent
// 		+ '!';
// });

// Универсальное делегирование событий в JavaScript
// <ul>
// <li>item <i>italic</i> item</li>
// <li>item <i>italic</i> item</li>
// <li>item <i>italic</i> item</li>
// <li>item <i>italic</i> item</li>
// <li>item <i>italic</i> item</li>
// </ul>

// let list = document.querySelector('ul')
// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
//
// 	if (li) {
// 		li.textContent = li.textContent
// 			+ '!';
// 	}
// });






































