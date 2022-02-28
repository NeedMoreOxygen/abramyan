const A = parseInt(prompt());

let B = 1;
let C = 1;
for (let i = 1; i <= A; ++i) {

    for (let c = 1; c <= i; ++c) {

        B = B * c;

    }
    B = 1/B;
    C = C + B;
    B = 1;
}
console.log(C);