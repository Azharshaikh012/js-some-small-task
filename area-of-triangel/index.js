const one = prompt("Please enter first side length");
const side1 = parseInt(one);


    if(isNaN(parseInt(one))){
        alert("Somthing wrong please try again..")
    }else{
        const two = prompt("Please enter second side length");
        const side2 =  parseInt(two);

        if(isNaN(parseInt(two))){
        alert("Somthing wrong please try again..")
        }else{
            const three = prompt("Please enter third side length");
            const side3 =  parseInt(three);

            if(isNaN(parseInt(two))){
        alert("Somthing wrong please try again..")
            }else{

            const s = (side1 + side2 + side3)/2;
            const temp = s*(s-side1)*(s-side2)*(s-side3);
            const result = Math.sqrt(temp);
            alert(result);

            }
            
        }
    }