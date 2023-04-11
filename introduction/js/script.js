"use strict";

//"Event"//

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(event) {
//     console.log(event)
// });


// Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:

// При движении мыши по странице будем выводить ее координаты относительно окна браузера (clientX и clientY):
// <div id="elem">0 : 0</div>

// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function (event) {
//     elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// При движении мыши по странице будем выводить ее координаты относительно окна браузера (pageX и pageY):

// <div id="elem">0 : 0</div>

// let elem = document.getElementById('elem');
//
// document.addEventListener('mousemove', function(event) {
//     elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });

// В следующем коде в двум событиям привязан один и тот же обработчик:
// Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.

// <button id="elem">text</button>
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
//
// function func(e) {
//     if (e.type === 'click') {
//         elem.style.background = 'red';
//
//     } else if (e.type === 'dblclick') {
//         elem.style.background = 'green'
//     }
// }

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(event) {
//     console.log(event.target); // выведет наш абзац
//     console.log(this);         // выведет наш див
// });


// Пусть у вас есть список ul с тегами li:
//
//  ul {
//     padding: 30px;
//     border: 1px solid red;
// }
// li {
//     list-style-type: none;
//     margin-bottom: 20px;
//     border: 1px dashed black;
// }
// <ul id="elem">
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
// </ul>

// Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте
// с помощью свойства tagName, по какому тегу был клик.
// Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак.
// А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', (event) => {
//     if (event.target.tagName === 'UL'){
//         let li = document.createElement('li');
//         elem.appendChild(li).innerHTML = 'новая li';
//     } else {
//         event.target.innerHTML += '!';
//     }
// });

// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
//     const keyName = event.key;
//     console.log(keyName);
// });
// elem.addEventListener('keypress', function(event) {
//     console.log(event.code + ' ');
// });

// Дан абзац и инпут. В него вводится текст
// и нажимается клавиша Enter. Сделайте так, чтобы в
// этот момент введенный текст попадал в абзац под инпутом,
// а содержимое инпута очищалось.
// <input>
//     <p></p>

// let inp = document.querySelector('input');
// let par = document.querySelector('p');
//
// inp.addEventListener('keypress', (e) => {
//     if (e.code === 'Enter') {
//        par.innerHTML = inp.value;
//        inp.value = '';
//     }
// })

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(event) {
//     if (event.ctrlKey) {
//         console.log('нажат Ctrl');
//     }
//     if (event.altKey) {
//         console.log('нажат Alt');
//     }
//     if (event.shiftKey) {
//         console.log('нажат Shift');
//     }
// });

// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
// let elem = document.querySelector('.div');
// elem.addEventListener('click', (e) => {
//     if (e.altKey) {
//         elem.style.background = 'green';
//     } else {
//         elem.style.background = 'none'
//     }
// })

// Пусть у вас есть список ul с тегами li:
//     Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
// <ul id="elem">
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
//     <li>text</li>
// </ul>

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', (e) => {
//     if (e.ctrlKey) {
//         e.target.innerHTML += ' 1';
//     } else if (e.shiftKey) {
//         e.target.innerHTML += ' 2';
//     }
// })

// Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
// <a href="/" id="elem">ссылка</a>
// let elem = document.querySelectorAll('a');
// for (let el of elem) {
//     el.addEventListener('click', (e) => {
//         e.preventDefault();
//         el.innerHTML += el.href;
//     })
// }

// Даны два инпута, абзац и ссылка.
// Пусть в инпуты вводятся числа.
// Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
/*<input type="text" id="inp1">
    <input type="text" id="inp2">
        <a href="/1" id="elem" style="display: block">Сумма</a>
        <p id="par"></p>*/
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let links = document.querySelector('#elem');
// let par = document.querySelector('#par');
// links.addEventListener('click', (e) => {
//     e.preventDefault();
//     let sum = 0;
//     sum = +inp1.value + +inp2.value;
//     par.innerHTML = sum;
// })

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function() {
//     console.log('зеленый');
// });
// elem2.addEventListener('click', function() {
//     console.log('голубой');
// });
// elem3.addEventListener('click', function() {
//     console.log('красный');
// });
// let div = document.querySelector('div');
// div.addEventListener('click', function(e) {
//     // if (e.target.tagName === 'DIV') {
//     //     console.log('клик именно по диву');
//     // }
//     // if (e.target.tagName === 'P') {
//     //     console.log('клик именно по абзацу');
//     // }
//     if (e.target.matches('div')) {
//         console.log('клик именно по диву');
//     }
//     if (e.target.matches('p')) {
//         console.log('клик именно по абзацу');
//     }
// });

// Даны следующие элементы:
//    <div><ul>
//    <li>1</li> <li>2</li><li>3</li>
//    </ul> </div>
// div, ul, li {padding: 20px;}
// div {border: 1px solid red;}
// ul {border: 1px solid orange;}
// li {border: 1px solid green;}
// Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
// let div = document.querySelector('.div');
// div.addEventListener('click', (e) => {
//     console.log(e.target)
// })
// Модифицируйте предыдущую задачу.
// Сделайте так, чтобы при клике на li,
// ей в конец добавлялся восклицательный знак,
// а при клике на ul - ей в конец добавлялась новая li.
// let div = document.querySelector('.div');
// div.addEventListener('click', (e) => {
//     if (e.target.matches('li')) {
//         e.target.innerHTML += '!'
//     } else if (e.target.matches('ul')) {
//         let li = document.createElement('li');
//         e.target.appendChild(li).innerHTML = '4';
//     }
// })

// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
//
// button.addEventListener('click', function(e) {
//     block.classList.add('active');
//     e.stopPropagation();
// });
// parent.addEventListener('click', function(e) {
//     block.classList.remove('active');
// });

// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// list.addEventListener('click', function(event) {
//     // event.target.innerHTML += '!';
//     let li = event.target.closest('li');
//
//     if (li) {
//         li.innerHTML = li.innerHTML + '!';
//     }
// });
// button.addEventListener('click', function() {
//     let item = document.createElement('li');
//     item.innerHTML = 'item';
//     list.appendChild(item);
// });



















