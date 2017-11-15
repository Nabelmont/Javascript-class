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

var sentence = prompt('Give me a sentence!');

function capitalize(string) {
  if(string.indexOf('.') != -1) {
    var example = string.split('.');
    if(example.length > 1) {
      let newSentence;
      let i = 0;
      for(i; i <= example.length; i++) {
        var firstLetter = example[i].substr(0,1).toUpperCase();
        var rest = example[i].substr(1).toLowerCase();
          newSentence += `${firstLetter}${rest}`;
      }
      return newSentence;
    }
  }




//   var firstLetter = string.substr(0,1).toUpperCase();
//   var rest = string.substr(1).toLowerCase();
//   return `${firstLetter}${rest}`;
// };

alert(capitalize(sentence));
