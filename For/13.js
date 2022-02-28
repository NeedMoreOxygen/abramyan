const A = parseInt(prompt());

let C = 1.1;
let B = 1.2;

for (let i = 2; i <= A; i+=2) {
    C = C + 0.2;
    B = B + 0.2;
}

let g = ( C - B);
console.log(g);
g = Math.ceil(g);
console.log(g);