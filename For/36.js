C
const K = parseInt(prompt());
let C = 0;
for(let t = 1; t<=N;t++){
    C = C+Math.pow(t, K);
}
console.log(C);