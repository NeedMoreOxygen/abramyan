let D = parseInt(prompt());
const A = parseInt(prompt());

let B = 1;
let C = 1;
for (let i = 2; i <= A; i += 2) {

    for (let c = 1; c <= i; ++c) {

        B = B * c;

    }
    let r = i;
    r = r -1;
    D = D * (-1);
    C = C + ((Math.pow(D, r)*(D * (-1))) / B);
    B = 1;
}

console.log(C);