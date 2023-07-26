const getInput = prompt("Please enter any valid digit");
const conInput = parseInt(getInput);
const numberRegex = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
// console.log(typeof conInput);

const showMsg = document.querySelector(".msg");


if(getInput === null){
        console.log(`Thank You`);
        alert(`Thank You`);

    }else if(getInput === ""){
        console.log(`You haven't input any key`);
        alert(`You haven't input any key`);
    }else if(numberRegex.test(getInput)){
        if(conInput%2 === 0){
            console.log(`${getInput} is a even number.`);
            alert(`${getInput} is a even number.`);

            // window.onload = function(){
            //     what();
            //     function what(){
            //         showMsg.innerHTML = 'hi is a even number';
            //     };
            // }
            // showMsg.innerHTML = `${getInput} is a even number`;
        }else {
            console.log(`${getInput} is a odd number`);
            alert(`${getInput} is a odd number`);
            // showMsg.innerHTML = `${getInput} is a odd number`;
        }
    }else{
        console.log(`something went wrong`);
        alert(`something went wrong`);
    }

