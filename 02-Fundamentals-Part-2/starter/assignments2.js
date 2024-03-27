// ? Functions
// function describeCountry(country, population, capitalCity) {
// 	return `${country} has ${population} million people and its capital city is ${capitalCity};`;
//    }
// //    console.log(describeCountry('Finland', 6, 'Helsinki'));
//    const descFinland = describeCountry(	'Finland', 6, 'Helsinki');
//    const descPortugal = describeCountry('Portugal', 13, 'Baku');
//    const descRussia = describeCountry('Russia', 30, 'Moscow');

//    console.log(descFinland, descPortugal, descRussia);
   
// ^ Function declaration vs expression 

// * my code 
// const population = 7900;
// function percentageOfWorld1 (countrypop) {
//    return countrypop / population * 100;
// }
// const azerbpop = percentageOfWorld1(7);
// const italiapop = percentageOfWorld1(59);
// const braziliapop = percentageOfWorld1(214)
// console.log(azerbpop, italiapop, braziliapop );


// const simple2 = function percentageOfWorld2 (countrypop) {
//    return countrypop / population * 100;
// }



// ! answer of the task
// function percentageOfWorld1(population) {
//    return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const percPortugal1 = percentageOfWorld1(10);
// const percChina1 = percentageOfWorld1(1441);
// const percUSA1 = percentageOfWorld1(332);

// console.log(percPortugal1, percChina1, percUSA1);


// & Arrow functions

const percentageOfWorld1 = population => (population / 7900) * 100;

const italiapop = percentageOfWorld1(55);
const chinapop = percentageOfWorld1(1441);
console.log(italiapop, chinapop);