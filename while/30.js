let A = parseInt(prompt());
let B = parseInt(prompt());
let C = parseInt(prompt());

let g = 1;
let r = 0;
while ((A - C) >= 0) {

    A = A -C;
    g = B;
    while((g-C) >=0){
g = g -C;
++r;
} }
console.log(r);