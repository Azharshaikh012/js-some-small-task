function printFizzBuzz(num){
    if(num !== 0){
        if(num % 3 === 0 && num % 5 === 0){
            console.log("Fizz Buzz");
        }else if(num % 3 === 0){
            console.log("Fizz");
        }else{
            console.log("Buzz")
        }
    }else{
        console.log(`${num} is not divisible by 3 or 5`);
    }
}

function checkError(input){
    if(input===""){
        console.log("Something Wrong");
    }else if(typeof input !== "number"){
        console.log("This is not a number");
    }else {
        return printFizzBuzz(input);
}
}

checkError(55);
