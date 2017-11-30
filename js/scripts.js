// const form = document.querySelector(login);
// const password = document.getElementById(password).textContent;
// const email = document.getElementById(email).textContent;
// const username = document.getElementById(username).textContent;
//
// for(i = 0; i < 4; i++) {
//   if(password = )
// }
//
//
// // const loginForm = form.login;
//
// function enableSubmit() {
// if(loginForm.password.value.length > 0
// && loginForm.username.value.length > 0
// && loginForm.email.value.length > 0) {
//   loginForm.submit.removeAttribute('disabled');
//   }
// };
//
// for(let i = 0; i < loginForm.length; i++) {
//   loginForm[i].addEventListener('keyup', function(e) {
//     enableSubmit();
//   });
// }
//
//
// var practice = function() {
//   var name = 'Noah';
//   alert(this);
// };
//  practice();
//
// var me = 'name';

//
// var clickDiv = document.querySelector('#click');
// clickDiv.addEventListener('click', function (e) {
//   console.log(this);
// });


var checkScope = function() {
  console.log(this.user);
};

var obj = {
  a: checkScope
  user: 'noah'
};

checkScope.call(obj);
// checkScope();
