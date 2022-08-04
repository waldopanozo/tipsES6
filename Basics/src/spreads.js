/**
 * 
 * the use of ... (Three dots) is called spreads and are very usefull in some cases
 */

////used in arrays

originalArray = [1,3,5,7]
newArray = [...originalArray, 2,4,6,8]

console.log(newArray)

////working ... with objects

origObject = {
    width:457,
    heigth:457,
}

newObject = {
    ...origObject,
    type:"Natural",
    ///in this case is only an update replace the last value for the new one
    width:576
}

console.log(newObject)
////like arguments of a function
const showArray = (...a) => {
    //"a" is a set of input arguments 
    for(i=0;i<a.length;i++){
        console.log(a[i])
    }
}

showArray("One","Two", "Three");