let D = parseInt(prompt());
const A = parseInt(prompt());

let B = 1;
let C = D;
for (let i = 1; i <= A; i += 2) {

    for (let c = 1; c <= i; ++c) {

        B = B * c;

    }
    D = D * (-1);
    C = C + (Math.pow(D, i) / B);
    B = 1;
}

console.log(C);