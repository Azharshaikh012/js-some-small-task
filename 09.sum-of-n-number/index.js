const n = prompt("Please enter any number");
const num = parseFloat(n);

if (n == null) {
    alert(`Thank You`);
}else if(n==""){
    alert(`You haven't input any key`);
}
 else{
    if (isNaN(n)) {
        alert(`${n} is invalid key`);
    } else {
        if(n < 0) {
            alert("You input a nagative number");
        }
        else {
            // console.log("yes n1");
            let n1 = (num*(num+1))/2;
            alert(n1);
                // let sum = 0;
                // for(let i=1; i<=num; i++){
                //     sum +=i;
                // }
                // alert(sum);

            }
         }
        }