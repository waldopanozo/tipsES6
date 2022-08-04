/**
 * the usual way 
 */
function helloSomebody(n){
    return `Hey ${n}, how is going?`
}

console.log(helloSomebody("wal"))

/**
 * function with constant
 */

const helloSomebodyA = (n) => {
    return `Hey ${n}, how is going?`
}

console.log(helloSomebodyA("wald"))

/**
 * function with constant simplified
 */

 const helloSomebodyB = (n) => `Hey ${n}, how is going?`

console.log(helloSomebodyB("waldex"))