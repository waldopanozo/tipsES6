console.log("Hello, and welcome to some tips for ES6")

/**
 * the var types 
 */

var name =  "XXX"
if(true){
    var name = "Waldo"
    console.log('inside structure',name)
}
console.log('outside structure',name)

/**
 * lest try with let 
 * this kind of calling change the value if is into an structure, when we use var this is not happened
 * */

let age =  39
if(true){
    let age = 40
    console.log('inside structure',age)
}
console.log('outside structure',age)

/**
 * lets trying using let into a switch (Problem) -> show is already declared until we add brackets in each case block
 * with var works fine
 * 
 */

function colors(c){
    switch(c){
        case "blue":{
            let canBe = "blueberry"
            return canBe
        }
        case "red":
        {
            let canBe = "apple"
            return canBe
        }
        case "yellow":{
            let canBe = "banana"
            return canBe
        }
        default:
            return "I don't know... :("
    }
}

console.log(colors("blue"))
console.log(colors("red"))
console.log(colors("asdghuidsahgiau"))

/**
 * lets try with constant, first with an object
 */

const person = {

}

person.name = "Waldo P."

console.log(person)

//now with arrays

const colorsArray = ["purple"]
colorsArray.push("blue")

console.log(colorsArray)

/**
 * managing strings 
 * using " ' and `
 */

console.log("Sample string by ")

const alias = "w@ldex"

console.log("I'm "+alias+". We can work together with \" ")
console.log('I\'m '+alias+'. We can work together with \' ')
console.log(`I'm ${alias}. We can work together with \` `)