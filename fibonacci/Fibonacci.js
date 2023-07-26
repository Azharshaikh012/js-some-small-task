
let num1 = 0;
let num2 = 1;
let temp;

const fabonacci = (n) => {

    for (let i = 0; i <= n; i++) {
        temp = num1 + num2;
        console.log(num1);
        num1 = num2;
        num2 = temp;
        // if (num1 >= n) {
        //     break;
        // }
    }

}
fabonacci(10);



