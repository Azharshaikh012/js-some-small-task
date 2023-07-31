const a = prompt('Enter a first number: ');
// const intA = parseInt(a);
let root1, root2;

if (isNaN(parseInt(a))) {
    alert("Somthing wrong please try again..")
} else {
    const b = prompt('Enter a second number: ');
    // const intB = parseInt(b);

    if (isNaN(parseInt(b))) {
        alert("Somthing wrong please try again..")
    } else {
        const c = prompt('Enter a third number: ');
        // const intC = parseInt(c);

        if (isNaN(parseInt(b))) {
            alert("Somthing wrong please try again..")
        } else {
            let discriminant = b * b - 4 * a * c;
            if (discriminant > 0) {
                root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

                alert(`The roots of quadratic equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`);
            } else {
                root1 = root2 = -b / (2 * a);
                alert(`The roots of quadratic equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`)
            }
        }
    }
}

// x = (-b ± √ (b2*2 - 4ac)

// if (discriminant == 0)
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//     alert(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
// }