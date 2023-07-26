// const printFizzBuzz = ()=>{
//     for(let i =1; i<=100; i++){
//         if(i%3===0){
//             console.log("Fizz");
//         }
//         if(i%5===0){
//             console.log("Buzz");
//         }
//         if(i%3 ===0 && i%5 ===0){
//             console.log("Fizz Buzz");
//         }
//     }
// }

// let print = printFizzBuzz;
// print();

// let input = prompt();

// const lessthanFourteenCheck = (element) => element < 14;


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
