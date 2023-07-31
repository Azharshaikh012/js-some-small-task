const a = prompt('Enter a first integer: ');
const result1 = a % 10;

if (isNaN(parseInt(a))) {
    alert("Somthing wrong please try again..")
} else {
    const b = prompt('Enter a second integer: ');
    const result2 = b % 10;

    if (isNaN(parseInt(b))) {
        alert("Somthing wrong please try again..")
    } else {
        const c = prompt('Enter a third integer: ');
        const result3 = c % 10;

        if (isNaN(parseInt(b))) {
            alert("Somthing wrong please try again..")
        } else {
            if(result1 == result2 && result1 == result3){

                alert(`${a}, ${b} and ${c} have the same last digit.`);
            }else{
                alert(`${a}, ${b} and ${c} have different last digit.`);
            }           
        }
    }
}