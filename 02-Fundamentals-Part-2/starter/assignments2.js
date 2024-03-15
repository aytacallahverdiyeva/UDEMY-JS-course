function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} million people and its capital city is ${capitalCity};`;
   }
//    console.log(describeCountry('Finland', 6, 'Helsinki'));
   const descFinland = describeCountry(	'Finland', 6, 'Helsinki');
   const descPortugal = describeCountry('Portugal', 13, 'Baku');
   const descRussia = describeCountry('Russia', 30, 'Moscow');

   console.log(descFinland, descPortugal, descRussia);
   