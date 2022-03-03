let N = parseInt(prompt());
let K = 1;
let g =2;
while(K<=N){
K=K+g;
g++;
}
console.log(g-2);
g--;
console.log(K-g);