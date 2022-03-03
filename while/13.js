let N = parseInt(prompt());
let K = 1;
let g =2;
while(K<=N){
K=K + (1/g);
g++;
}
console.log(g-1);

console.log(K);