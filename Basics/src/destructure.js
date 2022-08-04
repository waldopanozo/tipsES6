/**
 * Destructuring in ES6
 * 
 * you can use this in arrays or objects
 * 
 */

var Car = {
    model:2022,
    brand:"Toyota",
    cc:2500,
    importedFrom:"JAPAN",
}

const { brand, cc } = Car

console.log(brand)

/**
 * nwo we can try the same with arrays
 */

var [a,b]=[1,2]

console.log(b)

var [a,b,...lets] = [1,2,3,5,6,7,5,6,7,5,6,7]
console.log(...lets)

var [,,c] = [1,2,3]

console.log(c)


