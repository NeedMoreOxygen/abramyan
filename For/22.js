const D = parseInt(prompt());
const A = parseInt(prompt());

let B = 1;
let C = 1;
for (let i = 1; i <= A; ++i) {

    for (let c = 1; c <= i; ++c) {

        B = B * c;

    }

    C = C + (Math.pow(D, i) / B);
    B = 1;
}
console.log(C);