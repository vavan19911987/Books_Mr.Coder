'use strict'

// ПОВТОР Выпадающие списки//
// Дан селект, абзац и кнопка. По клику на кнопку
// выведите текст выбранного пункта списка в абзац.
// <select id="select">
//     <option>one</option>
//     <option selected>two</option>
//     <option>three</option>
// </select>
// <p class="par"></p>
// <input type="submit" id="inp">

// let select = document.querySelector('#select');
// let inpBtn = document.querySelector('#inp');
// let par = document.querySelector('.par');
// inpBtn.addEventListener('click', () => {
// 	par.innerHTML = select.value;
// })

// Сделайте выпадающий список годов от 2020 до 2030.
// При выборе какого-нибудь пункта списка выведите сообщение
// о том, високосный этот год или нет.
// <select id="select">
//     <option>2020</option> // високосный
//     <option>2021</option>
//     <option>2022</option>
//     <option>2023</option>
//     <option>2024</option> // високосный
//     <option>2025</option>
//     <option>2026</option>
//     <option>2027</option>
//     <option>2028</option> // високосный
//     <option>2028</option>
//     <option>2030</option>
// </select>
// <p class="par"></p>
// <input type="submit" id="inp" value="Високосный год?">
//
// function isLeap (year) {
// 	let data = new Date(year, 2, 0)
// 	return data.getDate() >= 29 ? 'Год високосный' : 'Год не високосный'
// }
// let inpBtn = document.querySelector('#inp');
// let par = document.querySelector('.par');
// let select = document.querySelector('#select');
// inpBtn.addEventListener('click', () => {
// 	par.innerHTML = isLeap(select.value);
// })


// Сделайте выпадающий список с названиями дней недели.
// В качестве атрибутов value пунктов списка добавьте
// номера дней недели от 1 до 7. По изменению списка выведите
// на экран сообщение о том, выбран выходной день или рабочий.
// <select id="select">
// 	<option value="1">Понедельник</option>
// <option value="2">Вторник</option>
// <option value="3">Среда</option>
// <option value="4">Четверг</option>
// <option value="5">Пятница</option>
// <option value="6">Суббота</option>
// <option value="7">Воскресенье</option>
// </select>
// <p id="par"></p>

// let select = document.querySelector('#select');
// let par = document.querySelector('#par');
// function func() {
// 	select.addEventListener('change', () => {
// 		par.innerHTML = select.value
// 	})
// }
// func();


// Дан инпут и селект. В инпут вводится какое-то число.
// По потери фокуса сделайте выделенным пункт списка,
// номер которого равен значению из инпута.
// <select id="select">
// 	<option value="1">Monday</option>
// <option value="2">Tuesday</option>
// <option value="3">Wednesday</option>
// <option value="4">Thursday</option>
// <option value="5">Friday</option>
// <option value="6">Saturday</option>
// <option value="7">Sunday</option>
// </select>
// <input type="text" id="inp">

// let select = document.querySelector('#select');
// let inp = document.querySelector('#inp')
// let opt = document.querySelectorAll('#select option');
//
// inp.addEventListener('blur', () => {
// 	select.selectedIndex  = inp.value ;
// })

// Переберите все пункты списка циклом и в
// конец текста каждого пункта добавьте значение его атрибута value.
// <select id="select">
//     <option value="1">Monday</option>
//     <option value="2">Tuesday</option>
//     <option value="3">Wednesday</option>
//     <option value="4">Thursday</option>
//     <option value="5">Friday</option>
//     <option value="6">Saturday</option>
//     <option value="7">Sunday</option>
// </select>

// let select = document.querySelector('#select');
// for (let i = 0; i < select.length; i++) {
// 	select[i].textContent = select[i].textContent +  ' ' + select[i].value
// }
// Переберите пункты списка циклом и для
// выбранного пункта в конец текста добавьте восклицательный
// знак, а для невыбранных пунктов - вопросительный.
// <select id="select">
//     <option value="1">Monday</option>
//     <option value="2">Tuesday</option>
//     <option value="3">Wednesday</option>
//     <option value="4">Thursday</option>
//     <option value="5">Friday</option>
//     <option value="6">Saturday</option>
//     <option value="7">Sunday</option>
// </select>

// let select = document.querySelector('#select');
// select.addEventListener('change', () => {
// 	for (let i = 0; i < select.length; i++) {
// 		if (select[i].selected) {
// 			select[i].textContent = select[i].textContent + '  ' + '!';
// 		} else if (!select[i].selected) {
// 			select[i].textContent = select[i].textContent + '  ' + '?';
// 		} else {
// 			select[i].textContent = select.textContent
// 		}
// 	}
// })

// По потери фокуса текст из textarea должен записаться в див:

// <textarea></textarea>
// <div></div>

// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
//
// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });

















