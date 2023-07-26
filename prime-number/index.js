const getInput = prompt("Please enter any valid digit");
const conInput = parseInt(getInput);
const numberRegex = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
// // console.log(typeof conInput);

// const showMsg = document.querySelector(".msg");

let chk = 0;

for (let i = 2; i < getInput; i++) {
  if (conInput % 2 === 0) {
    chk++;
    break;
  }
}

if (getInput === null) {
  console.log(`Thank You`);
  alert(`Thank You`);

} else if (getInput === "") {
  console.log(`You haven't input any key`);
  alert(`You haven't input any key`);
} else if (conInput <= 1) {
  alert(`${getInput} isn't a prime number`);

}

else if (numberRegex.test(getInput)) {
  if (chk == 0) {
    let sqr = getInput * getInput;
    alert(`${getInput} is a prime number`);
    alert(`${conInput} square is ${sqr}`);
  } else {
    alert(`${getInput} isn't a prime number`);
  }
} else {
  alert(`Please input a valid key`)
}
