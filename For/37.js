const N = parseInt(prompt());
let C = 0;
for (let t = 1;t<=N;t++){
    C= Math.pow(t,t) + C;
}
console.log(C);