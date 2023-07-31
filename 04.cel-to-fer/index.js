const valueCel = prompt("Please enter value in C");

if (valueCel == null) {
    alert(`Thank You`);

} else if (valueCel == "") {
    alert(`You haven't input any key`);

} else {
    if (isNaN(valueCel)) {
        alert(`${valueCel} is invalid key`);
    } else {
        let result = (valueCel * 9 / 5) + 32;
        alert(result + " F");
    }
}