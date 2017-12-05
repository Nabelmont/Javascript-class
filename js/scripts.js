// var name = "Noah";
// function callName() {
//   var name = "Bill";
//   console.log(name);
// };
 // console.log(name)

//
// let name = "Noah";
// function callName() {
//   let name = "Bill";
//   console.log(name);
// };
//
// callName();
//
//
// console.log(name)
//
// const name = "Noah";
// function callName() {
//   const name = "Bill";
//   console.log(name);
// };
//
// callName();
//
// console.log(name)
// var newString = new String("some string hereeeee");
//
// console.log(newString);
//
// console.log(Object.getPrototypeOf(newString));


// var myObj = {
//   firstNumber: 10,
// };
//
// myObj["firstNumber"] = prompt("what's your favorite number?");
//
// let number = 10;
// let arr = [1, 'foo', 'cheese'];
// let bool = false



function Movie(title, releaseYear, IMDBRating, director) {
  this.title = title;
  this.releaseYear = releaseYear;
  this.IMDBRating = IMDBRating;
  this.director = director;
};

Movie.sayThings = function() {
  return `The movie ${this.title} was released in ${this.releaseYear}
   and was directed by ${this.director}`
};

var brick = new Movie("Brick", 2004, 10, "Ryan Johnson");

function Arthouse(title, releaseYear, IMDBRating, director, snoodyLevel, redditRating) {
  Movie.call(this, title, releaseYear, IMDBRating, director);
  this.snoodyLevel = snoodyLevel;
  this.redditRating = redditRating;
};

var snoodyMovie = new Arthouse("The Room", 2002, 0, "Tommy Wiesoau", "10/10", 0);

console.log(snoodyMovie);
// function user(userName, password) {
//   this.userName = userName;
//   this.password = password;
// };
//
//
// var testUser = new user("Bill", "tacos");
//
// console.log(testUser);
