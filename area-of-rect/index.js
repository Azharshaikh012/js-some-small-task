const height = prompt("Please enter height");
const h1 = parseInt(height);


if (isNaN(parseInt(height))) {
    alert("Somthing wrong please try again..")
} else {
    const width = prompt("Please enter width");
    const w1 = parseInt(width);
    if (isNaN(parseInt(width))) {
        alert("Somthing wrong please try again..")
    } else {
        const result = h1 * w1;
        alert(`Height ${h1} and Width ${w1} := totel area of this rectangle ${result}`);
    }
}
