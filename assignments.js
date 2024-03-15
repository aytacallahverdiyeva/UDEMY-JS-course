/* 
^ First assignment values and variables
*/
// let country = 'Azerbaijan';
// let continent = 'Europe';
// let population = 10446000;

// console.log(country);
// console.log(continent);
// console.log(population);

/*
^ Second assignment data types
 */
// let isIsland = true;
// let language;

// console.log(typeof isIsland);
// console.log(typeof language);
// console.log( typeof country);
// console.log(typeof population);

/*
^ Let const var
*/

// const language = "Azerbaijani";
// const isIsland = true;
// let country = "Azerbaijan";
// let population = 11000000;

// country = 'Russia';
// console.log(country);

/*
^ Basic operators
 */
// let population = 10446000;
// let halfPopulation = population / 2;
// console.log(halfPopulation);

// population++;
// console.log(population);

// let populationFinland = 6000000;
// let populationOfFinlandisMore = population < populationFinland;
// console.log(populationOfFinlandisMore);

// let averallpop = 33000000;
// let averallpopIsMore = averallpop > population;
// console.log(averallpopIsMore);


// let country = "Portugal";
// let countrty2 = "Europe";
// let portugalPopulation = 11;
// let language = "portuguese";
// // let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
// const description = 
// country + " " + "is in" + " " + countrty2 + ", and its" + " " + portugalPopulation + " " + 
// "million people speak" + " " + language; 
// console.log(description);

// ^ Strings template literals

// let country = "Portugal";
// let countrty2 = "Europe";
// let portugalPopulation = 11;
// let language = "portuguese";

// console.log(`${country} is in ${countrty2} and its ${portugalPopulation} million people speak ${language} `)

// & Taking decisions: if/else statements

// let popAz = 130000000;
// let popSredne = 33000000;

// if (popAz > popSredne) {
// 	console.log("Portugal's population is 22 million below average");
// } else {
// 	console.log("something wrong ");
// }

// ^ Type conversion and coencion

// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> 617
// console.log('19' - '13' + 17); // -> 23
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1149 -6 = 1143

// * Equality operators == vs ===

// const numNeighbours = Number( prompt('How many neighbour countries does your contry have?'));
// if( numNeighbours === 1) {
// 	console.log("only 1 border!");
// } else if ( numNeighbours > 1) {
// 	console.log("more than 1 border");
// } else {
// 	console.log("no borders");
// }

// ^ Logical operators

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense, !hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
// 	console.log('Sarah is able to drive');
// } else {
// 	console.log('Someone else sholud drive....');
// }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);
// if(hasDriversLicense && hasGoodVision && !isTired) {
// 	console.log('Sarah is able to drive');
// } else {
// 	console.log('Someone sholud drive');
// }

// & Switch statements

// const language = 'hindi';

// switch (language) {
//     case 'chinese': 
//     case 'mandarin':
//         console.log('Most number of native !');
//     break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//     break;
//     case 'english':
//         console.log('3rd place');
//     break;
//     case 'hindi':
//         console.log('Number 4');
//     break;
//     case 'arabic':
//         console.log('5th most spoken language');
//     break;
//     default: console.log('Great language too :D');
// }

// ~ Ternary operator

// const population = 11;
// console.log(population > 33 ? " above average" : " below average")


// const country = 'Portugal';
// const population2 = 11;
// console.log(
//     `${country} population is ${population2 > 33 ? 'above' : 'below'} average`
// );


