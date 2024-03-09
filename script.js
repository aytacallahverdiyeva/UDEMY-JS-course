// let js = "amazing";
//       if (js === "amazing") alert("JS is funn");

//       2 + 3 - 2 + 10;
//       console.log(2 + 3 - 2 + 10);

/*
? VALUES AND VARIABLES 
*/

// console.log('Aytac');
// console.log(24);

// let userName = 'Aytac';
// console.log(userName);

// naming variables
/* 
* DO
*/
// let personName = 'aytac';
// let person_name = 'aytac';
// let _foo = "lorem";
// let $foo = "loremmm";

/* 
! DON'T 
*/
// let 3years = 3;
// let aytac&name = 'aytac';
// let new = "blablabla";
// let function = "lorem";
// let Person = "Sara";


/*
^ we can use this one but in some cases this creates some problems
 */
// let name = "Aytac";
// let firstName = "aytacka";
// console.log(firstName);


/*
? DATA TYPES
*/

// let jsIsFun = true;
// console.log(jsIsFun);
// console.log(typeof jsIsFun);

// jsIsFun = "yes sure!";
// console.log(typeof jsIsFun);

// undefined data type
// let age;
// console.log(age); //it gives us undefined 
// console.log(typeof age); //it also gives us undefined

// console.log(typeof null); //output object (it is a bug)


/* 
? Var Let Const
*/
// let age = 22;
// age = 18;
// console.log(age);

// in output we see error that we can mutate const variable
/*const birthYear = 2002;
birthYear = 1000;
console.log(birthYear);
*/
// var job = "programmer";
// job = "artist";
// console.log(job);

/*
? Basic operators
*/

/* 
& Math operators
*/
const now = 2033;
const aytacAge = now - 2002;
const timaAge = now - 1998;
console.log(aytacAge, timaAge);

console.log(aytacAge / 2 , aytacAge * 2);

const firstName = "Aytac";
const fullName = "Allahverdiyeva";
console.log(firstName + ' ' + fullName);


/* 
& Assignment operators
*/
let x = 2 + 4; // x = 6
// x += 5; // x = x + 5
// console.log(x);
x++; // x = x + 1
x--; // x = x - 1

console.log(x);

/* 
& Comparison opoerators
*/
console.log(aytacAge > timaAge); //> < <= >=
const isFullAge = aytacAge > 18;
console.log(isFullAge);
console.log( now - 2002 > now - 1998);









