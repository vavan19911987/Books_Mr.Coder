"use strict";

//"Таймеры" "Манипулирование элементами"//
// Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль

// function time1() {
//     console.log('1');
// }
// setInterval(time1, 1000);
// Пусть дана переменная, в которой изначально хранится число 100.
// Запустите таймер, который каждую секунду будет уменьшать значение
// этой переменной на 1 и выводить это значение в консоль.
// let i = 10;
//
// setInterval(() => {
//     console.log(--i)
//
// }, 100);
// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер,
// который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// Как только значение переменной достигнет нуля - остановите таймер.
// let i = 10;
// let timerId = setInterval(function () {
//     console.log(i--);
//     if (i <= 0) {
//         clearInterval(timerId);
//     }
// }, 100);

// Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
// <button id="start">start</button>
// <p></p>

// let btn = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let par = document.querySelector('p');
// let timerId;
// let i = 10;
// btn.addEventListener('click', function func() {
//     timerId = setInterval(function () {
//         par.innerHTML = i--;
//         if (i === 0) {
//             clearInterval(timerId);
//             par.innerHTML = 'Ваше время вышло';
//         }
//     }, 1000);
//     // this.removeEventListener('click', func);
//     stop.addEventListener('click', function () {
//         clearInterval(timerId);
//     })
// })


// Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:
// После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.


// <input type="submit" id="start" value="start">
//     <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let par = document.querySelector('p');
// let timerId;
// start.addEventListener('click', function () {
//     timerId = setInterval(function () {
//         let date = new Date();
//         par.innerHTML = date.getMinutes() + ' ' + date.getSeconds();
//     }, 1000);
// });
//
// stop.addEventListener('click', function () {
//     clearInterval(timerId);
// });

// Еще один программист также написал код для решения предыдущей задачи:
// После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.

// <input type="submit" id="start" value="start">
//     <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
//
// let timerId;
//
// start.addEventListener('click', function () {
//     timerId = setInterval(function () {
//         let date = new Date;
//         console.log(date.getMinutes() + ' ' + date.getSeconds());
//     }, 1000);
// });
//
// stop.addEventListener('click', function () {
//     clearInterval(timerId);
// });
// let elem = document.querySelector('#elem');
//
// setInterval(function() {
//     elem.value = +elem.value + 1;
// }, 1000);
// Пусть в инпуте в атрибуте value изначально записано число 10.
// Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
// let elem = document.querySelector('#elem');
//
// setInterval(function() {
//     elem.value = +elem.value - 1;
// }, 1000);

// Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.

// let elem = document.querySelector('#elem');
//
// let fun = setInterval(function() {
//     elem.value = +elem.value - 1;
//     if (+elem.value === 0) {
//         clearInterval(fun);
//     }
//
// }, 1000);

// Пусть дан такой код:

// <input type="button" id="elem" value="1">

// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1.
// Однако, по нажатию на кнопку вообще ничего не происходит.
// Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//     let self = this;
//     setInterval(function() {
//         self.value = Number(elem.value) + 1;
//     }, 1000);
// });
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//     setInterval(() => this.value = +this.value + 1, 1000);
// });

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//     function func(self) {
//         return function() {
//             self.value = +self.value + 1;
//         }
//     }
//
//     setInterval(func(this), 1000);
// });

// Пусть дан такой код:
//
//     // <input type="button" id="elem" value="10">
//
//         Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1.
//         Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода, используя изученный в данном уроке способ.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//    let set =  setInterval(function(self) {
//         self.value = +self.value - 1;
//         if (+self.value === 0) {
//             clearInterval(set)
//         }
//     }, 1000, this);
// });


// Дана кнопка. Дан абзац, текстом которого является число.
// По нажатию на кнопку запустите таймер, который каждую секунду
// будет увеличивать текст абзаца на 1.
// <input type="button" id="elem" value="Go">
//     <p></p>
// let go = document.querySelector('#elem');
// let par = document.querySelector('p');
//
// go.addEventListener('click', function st() {
//     let set = setInterval(() => {
//         par.innerHTML++;
//         if (par.innerHTML === '10') {
//             clearInterval(set)
//         }
//         this.removeEventListener('click', st)
//     },1000);
// })

// Дан инпут с числом. Сделайте так, чтобы каждую секунду
// в нем появлялся квадрат того числа, которое в нем записано.
// <input>

// let inp = document.querySelector('input');
// inp.addEventListener('blur', () => {
//     let set = setInterval(() => {
//         inp.value = inp.value ** 2;
//         if (inp.value >= 20000) {
//             clearInterval(set);
//         }
//     }, 1000)
//
// })

// Дан инпут. В него вводится число.
// По потери фокуса сделайте так, чтобы в абзаце ниже
// начал тикать обратный отсчет, начиная с введенного числа.
// Когда отсчет дойдет до нуля - он должен закончится

// let inp = document.querySelector('input');
// let par = document.querySelector('p');
// inp.addEventListener('blur', () => {
//     par.innerHTML = inp.value;
//     inp.value = '';
//     let set = setInterval(() => {
//         par.innerHTML--;
//         if (+par.innerHTML === 0) {
//             clearInterval(set);
//         }
//     }, 1000)
// })

// Дан инпут, кнопка и абзац. В инпут вводится какое-то число.
// По нажатию на кнопку запишите введенное число в текст абзаца и запустите
// обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

// let inp = document.querySelector('input');
// let go = document.querySelector('#btn');
// let par = document.querySelector('p');
// go.addEventListener('click', () => {
//     par.innerHTML = inp.value;
//     inp.value = '';
//     let set = setInterval(() => {
//         par.innerHTML--;
//         if (+par.innerHTML === 0) {
//             clearInterval(set);
//         }
//     }, 1000)
// })

// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию
// на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности,
// а по нажатию на вторую таймер останавливался.

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let par = document.querySelector('p');
// let set;
// let i = 0;
// start.addEventListener('click', () => {
//     set = setInterval(() => {
//         par.innerHTML = i++;
//     }, 1000)
//     stop.addEventListener('click', () => {
//         clearInterval(set);
//     })
// })

// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
// let par = document.querySelector('p');
// par.style.width = '40px';
// par.style.height = '40px';
// par.style.background = 'red';
// let set = setInterval(() => {
//     if(par.style.background === "red"){
//         par.style.background="green";
//     } else {
//         par.style.background="red";
//     }
// }, 1000);

// Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце:

// let par = document.querySelector('p');
// let set = setInterval(() => {
//     let data = new Date();
//     par.innerHTML = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
// }, 1000);

// Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
// <input id="start" type="submit" value="start">
//     <p></p>
// let par = document.querySelector('p');
// let star = document.querySelector('#start');
// star.addEventListener('click', () => setTimeout(() =>  par.innerHTML = 'Прошло 5-ть секунд с момента нажатия', 5000));

// Выведите в консоль число 0. Через секунду выведите число 1,
// через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.

// let i = 0;
//
// function time() {
//     setTimeout(() => {
//         console.log(i++);
//         if (i === 10) {
//             return 'stop';
//         }
//         time();
//
//     },1000);
// }
// time();

// Манипулирование элементами //

// Дан ol:
//     <ol id="elem"></ol>
// Вставьте ему в конец li с текстом 'item'.

// let elem = document.querySelector('#elem');
// let elemLi = document.createElement('li');
// elemLi.textContent = 'elem';
// elem.appendChild(elemLi);

// Дан ol и кнопка:
//     <ol id="elem"></ol>
// <button id="button">click me</button>
// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', (e) => {
//     let elemLi = document.createElement('li');
//     elemLi.textContent = 'elem';
//     elem.appendChild(elemLi);
// })

// Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li.
// Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', (e) => {
//     let elemLi = document.createElement('li');
//     elemLi.textContent = 'elem';
//     elem.appendChild(elemLi);
//     let liItem = document.querySelectorAll('li');
//     liItem.forEach((el) => {
//         el.addEventListener('click', () => elemLi.textContent += '!');
//     })
// })
// Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
// <ol id="elem"></ol>
// let elem = document.querySelector('#elem');
// for (let i = 1; i <= 10; i++) {
//     let elemLi = document.createElement('li');
//     elemLi.textContent = 'new elem';
//     elem.appendChild(elemLi);
// }

// Дан див. Запустите цикл, который добавит в наш див 5 инпутов.
// Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
// <div id="block"></div>
// <p></p>

// let blocks = document.querySelector('#blocks');
// let par = document.querySelector('p');
// for (let i = 1; i <= 5; i++) {
//     let inp = document.createElement('input');
//     inp.style.marginRight = '20px'
//     inp.addEventListener('blur', () => par.innerHTML = inp.value);
//     blocks.appendChild(inp);
// }

// Дан следующий код:
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// Сделайте так, чтобы любая li удалялась по клику на нее.

// let elemUl = document.querySelector('ul');
//  elemUl.addEventListener('click', (e) => {
//      e.target.remove();
//  })

// Дан следующий код:

//     <ul id="parent">
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
//
// <input type="submit" id="button">
//     Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
// let parent = document.querySelector('#parent');
// let btn = document.querySelector('#button');
// let parentLi = document.querySelectorAll('li')
// btn.addEventListener('click', (e) => {
//     parent.lastElementChild.remove();
// })

// Дан ul:
//     <ul id="elem">
//         <li>text</li>
//         <li>text</li>
//         <li>text</li>
//         <li>text</li>
//         <li>text</li>
//     </ul>
// Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.

// let elem = document.querySelector('#elem');
// let elemAnd = document.createElement('li')
// let elemAnd2 = document.createElement('li')
// elemAnd2.textContent = 'Start'
// elemAnd.textContent = 'Finish'
// elem.append(elemAnd);
// elem.prepend(elemAnd2);



// Дан элемент #elem:

    // <ul id="parent">
    //     <li>text</li>
    //     <li>text</li>
    //     <li id="elem">text</li>
    //     <li>text</li>
    //     <li>text</li>
    // </ul>
// Вставьте перед этим элементом элемент с текстом 'new'.

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// let elemLi = document.createElement('li');
// elemLi.innerHTML = 'new';
// elemLi.addEventListener('click', () => elemLi.innerHTML += '!');
// parent.insertBefore(elemLi, elem);
// родитель.insertBefore(элемент, перед кем вставить)


// Дан элемент:

    // <div id="elem" style="border: 1px solid red;">
    //     <p>text</p>
    //     <p>text</p>
    //     <p>text</p>
    // </div>
// Вставьте перед ним абзац с текстом '!!!'.
//
// let par1 = document.createElement('p');
// let par2 = document.createElement('p');
// let par3 = document.createElement('p');
// let par4 = document.createElement('p');
// par1.innerHTML += '!!!';
// par2.innerHTML += '###';
// par3.innerHTML += '@@@';
// par4.innerHTML += '&&&';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', par1);
// elem.insertAdjacentElement('afterEnd', par2);
// elem.insertAdjacentElement('afterBegin', par3);
// elem.insertAdjacentElement('beforeEnd', par4);

// Дан элемент:

    // <div id="elem" style="border: 1px solid red;">
    //     <p>text</p>
    //     <p>text</p>
    //     <p>text</p>
    // </div>
// Дан элемент. Вставьте перед ним следующий тег:

    // <div class="www"><p>text</p><p>text</p><input></div>

// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
// <input type="text" name="text" id="text">
//     <input type="submit" id = 'btn' value="Clone">

// let inpText = document.querySelector('.text');
// let inpBtn = document.querySelector('#btn');
//
// inpBtn.addEventListener('click', () => {
//     let clone = inpText.cloneNode(true);
//     console.log(clone);
//     inpText.insertAdjacentElement('afterend', clone);
// })
// Дан элемент:
    // <div id="elem" class="www"></div>
// Проверьте, является ли этот элемент элементом с классом www.

// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));


// Даны две переменные elem1 и elem2, содержащие два элемента:
    // <div id="elem1">
    //     <p id="elem2"></p>
    // </div>
// Проверьте, является ли элемент из elem2 потомком элемента из elem1.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
//
// let contain = elem1.contains(elem2);
// console.log(contain);























