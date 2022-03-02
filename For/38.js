const N = parseInt(prompt());
let a = 0;
let C = 1;
for (let t = 1; t <= N; t++) {
    A = N - t;
    C = Math.pow(t, A) + C;
}
console.log(C);