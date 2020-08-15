function add(num1, num2) {
    if (num2 == undefined) {
        //num2=num2 || 0;
        num2 = 10;
    }
    return num1 + num2;
}

const total = add(15, 5);
console.log(total);