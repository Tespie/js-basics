/* FIBONACI SERIES */
// const range = parseInt(prompt('Fibonaci series upto ...'));
const range = 5
console.log('range = ', range);

let n1 = 0, n2 = 1, nextNum;

for (let i = 1; i <= range; i++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}
