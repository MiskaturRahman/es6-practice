const doubleIt = num => num * 2; //single parameter
const add = (x, y) => x + y; //double parameter
const give5 = () => 5;

const result = add(50, 50);
const result2 = give5();
console.log(result);
console.log(result2);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 5);
console.log(result3);





