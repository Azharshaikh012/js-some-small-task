let x = prompt("Enter the first variable:");
let temp;


if(x==null){
    alert(`Thank You`);
}else if(x==""){
    alert(`You haven't input any key`);
}else{
    let y = prompt("Enter the second variable:");
    if(y==null){
        alert(`Thank You`);
    }else if(y==""){
        alert(`You haven't input any key`);
    }else{

        alert(`Before swapping: x=${x} and y=${y}`)
        temp = x;
        x = y;
        y = temp;
        alert(`After swapping: x=${x} and y=${y}`);
        console.log(`After swapping: x=${x} and y=${y}`);

    }
}


