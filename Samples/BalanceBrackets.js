/**
 * TODO: Check the final solution because is in the middle of the solution, I need to go to my house... :)
 */

function balanceBrackets(str){
    
    let array = str.split(" ");

    // console.log(array);

    let abiertos = {
        0 : "{",
        1 : "[",
        2 : "(",
    };

    let cerrados = {
        0 : "}",
        1 : "]",
        2 : ")",
    };
    let arrayAbiertos = [];
    array.forEach((element) => {
        /**
         * in the case of an open bracket
         */
        if(abiertos.includes(element)){
            arrayAbiertos.push(element);   
        }
        /**
         * in the case of a closed bracket
         */
        if(cerrados.includes(element)){
            ///is must the inverse of the open bracket if not return false directly
        }
    });

    console.log(arrayAbiertos);



    

}

console.log(balanceBrackets("{ [ ] }"));