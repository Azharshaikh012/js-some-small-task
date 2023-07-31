const num = prompt("Please enter any number");
const n = parseInt(num);
const numberRegex = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;

if(num == null){
        alert(`Thank You`);

    }else if(num === ""){
        alert(`You haven't input any key`);
    }else {
            if(n < 0){
                alert(`${n} is a nagative number.`);
    
            
            }else if(n==0)  {
                alert(`You input Zero`);
            }else{
            alert(`${n} is a positive number.`);
        }
    }



