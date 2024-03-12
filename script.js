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

// ? Basic operators

// & Math operators

// const now = 2033;
// const aytacAge = now - 2002;
// const timaAge = now - 1998;
// console.log(aytacAge, timaAge);

// console.log(aytacAge / 2 , aytacAge * 2);

// const firstName = "Aytac";
// const fullName = "Allahverdiyeva";
// console.log(firstName + ' ' + fullName);

 
// & Assignment operators

// let x = 2 + 4; // x = 6
// x += 5; // x = x + 5
// console.log(x);
// x++; // x = x + 1
// x--; // x = x - 1

// console.log(x);

// & Comparison opoerators

// console.log(aytacAge > timaAge); //> < <= >=
// const isFullAge = aytacAge > 18;
// console.log(isFullAge);
// console.log( now - 2002 > now - 1998);

// ~ Operator Precedence (Приоритет оператора)

// const now = 2024;
// const aytacAge = now - 2002;
// const timaAge = now - 1998;

// console.log(now - 2002 > now - 1998);

// let x, y;
// x = y = 25 - 10 - 5;  // x=y=10 x=10 y=10
// console.log(x,y);

// const averageAge = (aytacAge + timaAge) / 2;
// console.log(aytacAge, timaAge, averageAge);

// & String Template literals


// const firstName = "Aytac";
// const birthYear = 2002;
// const year = 2024;
// const job = "Programmer";
// const aytac = " i am " + firstName + " a " + (year - birthYear) + " years old " + job;
// console.log(aytac);


// const aytacNew = `I am ${firstName} a ${year - birthYear} old ${job}`;
// console.log(aytacNew);

// console.log(`Just a regular string...`);

// ^ this two methods shows the same output

// console.log('string with \n\
// multiple \n\
// lines ');

// console.log(`string with 
// mulpitle
// lines`);

// & Taking decisions: if/else statements

// const age = 18;

// if(age >= 18){
// 	console.log('Aytac can drive');
// } else {
// 	const yearsleft = 18 - age;
// 	console.log(`Aytac cant drive a car please wait ${yearsleft} years` );
// }
// let century;
// const birthYear = 2001;
// if (birthYear <= 2000) {
// 	century = 20;
// } else {
// 	century = 21;
// }
// console.log(century);

// & Type conversion and coercion
// ~ Type conversion
// const inputYear = '2002'; //ouyput gives us string
// console.log(inputYear + 5); //output 20025 , its wrong
// console.log(Number(inputYear)); //output gives us a number not a string

// Number function converts to number
// console.log(Number(inputYear) + 5); //output will be 2002 + 5= 2007

// console.log(Number('Aytac')); //output will be Nan - not a number

// console.log(typeof NaN); // number

// console.log(String(22));

// we can only convert to string to number and to a boolean 

// ~ Type coercion
// console.log('I am ' + 23 + ' years old'); //converts 23 to string
// console.log('10' - '3' - 1); //converts strings to number
// console.log('10' + 1); //splits them to 101
// console.log('2' + '6'); //also splits to 26
// console.log('8' / 2); // 4

// let n = '1' + 1; // 11
// n = n - 1; // 11 - 1 = 10
// console.log(n);










