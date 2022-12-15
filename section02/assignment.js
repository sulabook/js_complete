// LECTURE: Values and Variables
const country = 'Korea'
const continent = 'Asia'
let population = 70

console.log(`Country: ${country}
Continent: ${continent}
Population: ${population}`)

// LECTURE: Data Types
const isIsland = false
let language
console.log(`Type of isIsland: ${typeof isIsland}
Type of population: ${typeof population}
Type of country: ${typeof country}
Type of language: ${typeof language}`)

// LECTURE: let, const and var
language = 'Korean'

// LECTURE: Basic Operators
population++
console.log(`Population: ${population}`)
let description = country +
' is in ' +
continent +
', and its ' +
population +
' million people speak ' +
language

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

// LECTURE: Taking Decisions: if /else Statements
if (population > 33) {
  console.log(`'${country}'s population is above average`)
} else {
  console.log(`'${country}'s population is ${33 - population} million below average`)
}

// LECTURE: Type Conversion and Coercion
console.log('9' - '5')
console.log('19' - '13' + '17')
console.log('19' - '13' + 17)
console.log('123' < 57)
console.log(5 + 6 + '4' + 9 - 4 - 2)

// LECTURE: Equality Operators: == vs. ===
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
// if (numNeighbours === 1){
//   console.log('Only 1 border')
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border')
// } else {
//   console.log('No borders')
// }

// LECTURE: Logical Operators
if (language === "English" && population < 50 && isIsland === false) {
  console.log(`You should live in ${country} :)`)
} else {
  console.log(`${country} does not meet your criteria`)
}

// LECTURE: The switch Statement
switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers!')
    break
  case 'Spanish':
    console.log('2nd place in number of native speakers')
    break
  case 'English':
    console.log('3rd place')
    break
  case 'Hindi':
    console.log('Number 4')
    break
  case 'Arabic':
    console.log('5th most spoken language')
    break
  default:  
    console.log('Great language too :D')
}

// LECTURE: The Conditional (Ternary) Operator
console.log(`'${country}' population is ${population > 33 ? 'above' : 'below'} average`)