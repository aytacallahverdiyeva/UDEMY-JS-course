'use strict'; 

// * Strict mode 
// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('i can drive');

//strict mode reservs some words so we cannot use them for variables
// const interface = 'Audio';
// const private = 534;

// & Functions

function logger() {
	console.log('my name is aytac');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor (apples, oranges){
	// console.log(apples, oranges);
	const juice = `juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}
// ^ output of this two methods will be the same
// const appleJuice = fruitProcessor(2,4); 
// console.log(appleJuice);

// console.log(fruitProcessor(2,8));

const appleOrangeJuice = fruitProcessor(1, 3);
console.log(appleOrangeJuice);













