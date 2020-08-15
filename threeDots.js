const ages = [12, 13, 23, 43, 54, 65];
const ages2 = [65, 78, 76, 66, 89];
// const allAges = ages.concat(ages2);

//array function using spread operator(... threee dots method)
const allAges = [...ages, ...ages2];
console.log(allAges);


const business = 450;
const minister = 700;
const sochib = 550;
const takaPoisa = [450, 700, 550];
//const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);