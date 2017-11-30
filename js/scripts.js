 var div = document.querySelector('.text');
// // div.textContent = 'hello world!';
// div.innerHTML = '<h1 class="text-center">Whoa, JS IS SO KEWL!!</h1>';
var myNewPTag = document.createElement('p');
// var myDiv = document.createElement('div');
// myDiv.textContent = 'Star Wars is gonna suck..........;()';
myNewPTag.textContent = 'stuff';
// div.appendChild(myNewPTag);
var ul = document.querySelector('ul');
var lis = document.querySelectorAll('li');
ul.insertBefore(myNewPTag, lis[2]);
// var userInput = ' adslf dfd  sfw fj 033';
// userInput = userInput.split(' ').trim().join(' ');
myNewPTag.className = 'text-center text-danger';

myNewPTag.addEventListener('click', function(e) {

});
var myImg = document.createElement('img');
myImg.setAttribute('src', 'https://go');

div.appendChild(myImg);
