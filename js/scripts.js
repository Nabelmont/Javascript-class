// function(name) {
//   console.log(name);
// }('Noah');
//
// function logName(name) {
//   console.log(name);
// };
//
// // Function Expression
// var logName = function(name) {
//   let me = 'Ryan';
//   var you = 'Ryeker';
//   console.log(name);
// }
//
// var nameToLog = prompt('gimme name';)
// logName(nameToLog);
// var task = 'teach to swim';
// var time = 2;
// function doWork (task, time) {
//   var rate = 50;
//   function calcTime(time) {
//     return time * 50;
//   };
//   var totalTime = calcTime(time);
//   doWork();
// };
//
// doWork(task, time)

// var sentence = prompt('Give me a sentence!');
//
// function capitalize(string) {
//   if(string.indexOf('.') != -1) {
//     var example = string.split('.');
//     if(example.length > 1) {
//       let newSentence;
//       let i = 0;
//       for(i; i <= example.length; i++) {
//         var firstLetter = example[i].substr(0,1).toUpperCase();
//         var rest = example[i].substr(1).toLowerCase();
//           newSentence += `${firstLetter}${rest}`;
//       }
//       return newSentence;
//     }
//   }




//   var firstLetter = string.substr(0,1).toUpperCase();
//   var rest = string.substr(1).toLowerCase();
//   return `${firstLetter}${rest}`;
// // };
//
// alert(capitalize(sentence));


// var string = "aodsfhpa";
//
// var arr = string.split('abcdef');

// var myId = document.querySelector('#hello');
//
// myId.addEventListener('click', ((e) => {
//
//   // do stuff here
// });
//
// var myEventFn = function() {
//
// };


// var isUser = confirm('are you a user?');
// myId.addEventListener('click', isUser ? myEventFn : nonUserFn);

var textWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
var input = document.querySelector('#myInput');
var body = document.querySelector('body');
let myPTag = document.querySelector('#myPTag');
input.addEventListener('keydown', (() => {
  let userInput = e.target.value;
  let r = Math.floor(Math.random() * (colors.length - 1) - 1 +1)) + 1;
  let randColor = textWeights[r];
  body.style.backgroundColor = randColor;
  myPTag.innerHTML = userInput;
  if(e.keycode == 13) {
    
  }
}));
