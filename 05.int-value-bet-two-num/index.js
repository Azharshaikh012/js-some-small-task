const min = prompt("Enter a min value: ");
const minNum = parseInt(min);

if (min == null) {
    alert(`Thank You`);
} else if (min == "") {
    alert(`You haven't input any key`);
}
else {
    if (isNaN(min)) {
        alert(`${min} is invalid key`);
    } else {
        const max = prompt("Enter a max value: ");
        const maxNum = parseInt(max);

        if (min == null) {
            alert(`Thank You`);
        } else if (min == "") {
            alert(`You haven't input any key`);
        }
        else {
            if (isNaN(min)) {
                alert(`${min} is invalid key`);
            }
            else if (min >= max) {
                alert(`Sorry ${min} > ${max}..`)
            }else {
                const a = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
                alert(`Random value between ${min} and ${max} is ${a}`);
            }
        }
    }
}

