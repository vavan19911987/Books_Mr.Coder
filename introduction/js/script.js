'use strict'

// ПОВТОР УЗЛЫ с новыми фишками//

// Напишите код, который покажет разницу между lastChild и lastElementChild.
// <div class="one">
//     // i commit
//     <span class="iSpan">
//         text
//     </span>
// i commit 2
// </div>

// let test = document.querySelector('.one');
// console.log(test.lastChild)
// console.log(test.lastElementChild.textContent);
// Напишите код, который покажет разницу между nextSibling и nextElementSibling.
// let test = document.querySelector('.one');
// console.log(test.nextSibling)
// console.log(test.nextElementSibling);
// Напишите код, который покажет разницу между previousSibling и previousElementSibling.
// let test = document.querySelector('.one');
// console.log(test.previousSibling)
// console.log(test.previousElementSibling);

// Дан див:
// Переберите циклом все узлы этого дива и выведите их в консоль.
// <div id="elem">txt<b>tag</b><!--com-->
// txt<b>tag</b><!--com--></div>

// let div = document.querySelectorAll('#elem');
// for (let i = 0; i < div.length; i++) {
// 	for (let j = 0; j < div[i].childNodes.length; j++) {
// 		console.log(div[i].childNodes[j].nodeName)
// 	}
// }
// for (const divElement of div) {
// 	console.log(divElement.childNodes)
// }

// Дан див:
// Переберите циклом все узлы этого дива и
// выведите в консоль только узлы-элементы и текстовые узлы.
// <div id="elem">txt<b>tag</b><!--com-->
// 	txt<b>tag</b><!--com--></div>

// let div = document.querySelectorAll('#elem');
// for (let i = 0; i < div.length; i++) {
// 	for (let j = 0; j < div[i].childNodes.length; j++) {
// 		console.log(div[i].childNodes[j].nodeType)
// 	}
// }
// Дан див:
// Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>

// let div = document.querySelectorAll('#elem');
// for (let i = 0; i < div.length; i++) {
// 	for (let j = 0; j < div[i].childNodes.length; j++) {
// 		if (div[i].childNodes[j].nodeType === 3) {
// 			console.log(div[i].childNodes[j].textContent)
// 		}
// 	}
// }









