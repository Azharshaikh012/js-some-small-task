const a = parseFloat(prompt("Enter first number: "));

if (isNaN(a)) {
    alert(`You input a invalid number`);
} else {
    const b = parseFloat(prompt("Enter second number: "));
    if (isNaN(b)) {
        alert(`You input a invalid number`);
    } else {
        const c = parseFloat(prompt("Enter third number: "));

        if (isNaN(c)) {
            alert(`You input a invalid number`);

        } else {
            //    alert(Math.max(a,b,c)+ " is greatest number");
            if (a > b && a > c) {
                alert(`a = ${a} is the greatest`);
            } else if (b > a && b > c) {
                alert(`b = ${b} is the greatest`);
            } else if (c > a && c > b) {
                alert(`c = ${c} is the greatest`);
            } else {
                alert(`there ${a} = ${b} = ${c} are all number is equal`)
            }
        }
    }
}