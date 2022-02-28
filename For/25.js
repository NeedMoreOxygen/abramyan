let D = parseInt(prompt());

const A = parseInt(prompt());

let C = D;

for (let i = 2; i <= A; i++) {
    D = D * (-1);
    C = C - (Math.pow(D, i)) / i;

}
console.log(C);