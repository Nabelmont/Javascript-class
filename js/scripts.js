// let a = 1;
// let b = 2;
//
// function compare(){
//   if (a || b) {
//     console.log('Hooray!')
//   }
//   else{
//     console.log('Does not work sadface');
//   }
// }
//
// compare();

//
// var firstItem = 'Cheese';
// var secondItem = String(secondItem);
// var thirdItem = 'Burger';
// var fourthItem = String(Cheese);
//
// function compare(){
//   if((firstItem && secondItem) === thirdItem)  {
//     console.log(thirdItem)
//   }
//   else((firstItem && secondItem) == fourthItem)
//     console.log(fourthItem);
// }
//
// compare();

// var myString = "Ted";
// var myStringObject = new String("steve ");
// var isStrictlyEqual = myString === myStringObject;
// alert(isStrictlyEqual); //false?
// var isLooseEqual = myString == myStringObject;
// alert(isLooseEqual); //true?

// var age = 31;
// alert(age);
// age++;
// alert(age);
//
// var age = 31;
// alert(age);
// age--;
// alert(age);

// var quantity = prompt("How many, Pac?", 5);
// quantity = parseInt(quantity);

//  var firstNumber = prompt("Give me a number!", 10);
//  var secondNumber = prompt("Give me another number!",10);
//  firstNumber = parseInt(firstNumber);
//  secondNumber = parseInt(secondNumber);
//  firstNumber += secondNumber;
//
// if(firstNumber >= 22) {
//   alert("It's 22!!!");
// } else if(firstNumber == 10){
//   alert("It's 10, therefore they put in less than 10...");
// } else {
//   alert("You suck...");
// }
//
// switch(firstNumber) {
//   case 10:
//     alert("It's 10, therefore they put in less than 10...");
//     break;
//   case 22:
//     alert("It's 22!!");
//     break;
//   default:
//     alert("You suck...");
//     break;
// }

// var userResponse = prompt('Give me a number');
// userResponse = parseInt(userResponse);
//
// userResponse == NaN ? alert("Oh NO!!!!!!") : alert(userResponse);
//
// var isMember = confirm("Are you a member?");
// var price;
//
// isMember ? price == 2 : price == 6

// var askAge = prompt("Type in your age.");
// askAge = new Date(askAge);
// if (askAge > 18){
//   prompt("Are you less than 80 years old?");
// } else {
//   alert("You are not old enough!!");
//   break;
// } if (askAge > 18 && askAge < 80) {
// var starWar = prompt("Do you like Star Wars?");
// } if (askAge > 80) {
//   prompt("Do you like Prunes?");
// } if (starWar = !yes) {
//   break;
// } else {
//   YOU ROCK!!!
// }


//Takehome

var userName = prompt('what is your name?', 'Joe');
var favColor = prompt('what is your favorite color?', 'acceptable: blue, green, ...');
favColor = favColor.toLowerCase();
switch(favColor) {
  case 'blue':
    alert('Blue is do Gewd.');
    break;
  case 'green':
    alert('Greeeeeeeen .');
    break;
    default:
      alert('No, Try AGAIN!!!!!!!!!');
