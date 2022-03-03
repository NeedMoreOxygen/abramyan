const N = parseInt(prompt());
const K = parseInt(prompt());
let C = N;
let g =0;

while(C>K){
C=C-K;
g++;
}
console.log(g);
console.log(C);
