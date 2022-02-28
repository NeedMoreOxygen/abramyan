const A = parseInt(prompt());
const N = parseInt(prompt());
let B = A;
for (let i = 1; i < N; i++) {
    B = B * A;

}
console.log(B);