// const n = parseFloat(prompt("Enter table number: "));
const n = 12;

if (n == null) {
    alert(`Thank You`);
} else {
    if (isNaN(n)) {
        alert(`${n} is invalid key`);
    } else {
        for(let i=1; i<=10; i++){
            // document.write(i*n, " <br>");
            document.getElementsByClassName("msg").innerHTML = "New text!";
        }
    }
}