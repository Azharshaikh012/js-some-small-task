const valueKm = prompt("Please enter value in KM");

if (valueKm == null) {
    alert(`Thank You`);

} else {
    if (isNaN(valueKm)) {
        alert(`${valueKm} is invalid key`);


    } else {
        let result = (valueKm * 0.621371);
        alert(result.toFixed(2) + " mi");
    }
}


