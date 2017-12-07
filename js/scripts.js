// var sayHello = function() {
//   alert('Hey there, customer!');
// };
//
// var interval = setInterval(sayHello,  2000)
//
//
// // clearTimeout(timer);
var loginBtn = document.getElementById("logIn");


loginBtn.addEventListener('click', function(e) {
  e.preventDefault();//Mockup for submitting data and getting results
  var username = document.forms[0].username.value;
  localStorage.setItem("username", username);
});
//
// var clearUser = document.getElementById("clearUser");
//
// clearUser.addEventListener('click', function(e) {
//   e.preventDefault();
//   var username = document.forms[0].username.value;
//   localStorage.removeItem("username", username);
// });
//
// var update = document.getElementById("updateBtn");
//
// update.addEventListener('click', function(e) {
//   e.preventDefault();
//   var username = document.forms[0].username.value;
//   localStorage.removeItem("username", username);
//   var newUser = "Tim";
//   localStorage.setItem("username", newUser);
// });
var update = document.querySelector('#updateBtn');
var clear = document.querySelector('#clearBtn');
var alert = document.querySelector('#alertBtn');


var btns = document.querySelectorAll('button');
var attachListeners = function(element, evt) {
  element.addEventListener(evt, function(e) {
    switch(element) {
      case update:
        var itemToStore = provideStorageItem(document.forms.loginForm.username.value);
        localStorage.setItem('username', itemToStore);
        break;
    }
  });
}

var provideStorageItem = function (input) {
  return input.value;
};
